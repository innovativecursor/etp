import { CollectionConfig } from 'payload'

const HeroSection: CollectionConfig = {
  slug: 'herosection',
  admin: {
    useAsTitle: 'mainHeading',
  },
  access: {
    read: () => true,
    create: () => true,
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
