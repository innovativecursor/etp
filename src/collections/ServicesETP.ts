import { CollectionConfig } from 'payload'
// ✅ adjust the path if needed

const ServicesETP: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    create: async ({ req: { payload } }) => {
      const existing = await payload.find({
        collection: 'services' as any, // ⛑️ This skips the TS error
        limit: 0,
      })

      return existing.totalDocs < 6
    },
    read: () => true,
  },
  fields: [
    {
      name: 'number',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'icon',
      type: 'select',
      required: true,
      options: [
        { label: 'Residential', value: 'FaBuilding' },
        { label: 'Commercial', value: 'FaUser' },
        { label: 'Landscape', value: 'FaImage' },
        { label: 'Swimming Pool', value: 'LuWaves' },
        { label: 'House Renovation', value: 'FaHome' },
        { label: 'Fencing and Backfilling', value: 'MdOutlineFence' },
      ],
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'tagline',
          type: 'text',
          required: true,
          defaultValue: 'Default tagline',
        },
        {
          name: 'location',
          type: 'text',
          required: true,
          defaultValue: 'Default tagline',
        },
      ],
    },
  ],
}

export default ServicesETP
