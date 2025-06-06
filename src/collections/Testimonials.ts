// src/collections/Testimonials.ts

import { CollectionConfig } from 'payload'

const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
    },
  ],
}

export default Testimonials
