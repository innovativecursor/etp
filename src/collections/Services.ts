import { CollectionConfig } from 'payload'

const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
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
          relationTo: 'media', // assuming you have a media collection
        },
      ],
    },
  ],
}

export default Services
