import { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
  slug: 'faqs',
  labels: {
    singular: 'FAQ',
    plural: 'FAQs',
  },
  admin: {
    useAsTitle: 'question',
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      label: 'FAQ Question',
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
      label: 'FAQ Answer',
    },
  ],
}

export default FAQs
