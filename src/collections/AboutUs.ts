// 1. AboutUs CollectionConfig (Payload CMS)
import { CollectionConfig } from 'payload'

const AboutUs: CollectionConfig = {
  slug: 'aboutus',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create: async ({ req: { payload } }) => {
      const existing = await payload.find({
        collection: 'aboutus' as any,
        limit: 1,
      })
      return existing.totalDocs === 0
    },
    update: () => true,
  },
  fields: [
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
      name: 'points',
      type: 'array',
      required: true,
      maxRows: 3,
      fields: [
        {
          name: 'pointText',
          type: 'text',
        },
      ],
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
    },
    {
      name: 'desktopImages',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'bottomImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default AboutUs
