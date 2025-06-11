import { CollectionConfig } from 'payload'

const HeroSection: CollectionConfig = {
  slug: 'herosection',
  admin: {
    useAsTitle: 'mainHeading',
  },
  access: {
    read: () => true,
    create: async ({ req: { payload } }) => {
      const existing = await payload.find({
        collection: 'herosection' as any,
        limit: 1,
      })

      // If one exists, block creation
      return existing.totalDocs === 0
    },
    update: () => true,
  },
  fields: [
    {
      name: 'mainHeading',
      type: 'text',
      required: true,
    },
    {
      name: 'highlightedText',
      type: 'text',
      required: true,
    },
    {
      name: 'subText',
      type: 'textarea',
      required: true,
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: true,
    },
    {
      name: 'desktopImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default HeroSection
