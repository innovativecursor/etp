// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import ContactUsForm from './collections/ContactUs'
import FAQs from './collections/FAQ'
import Projects from './collections/Projects'
import Testimonials from './collections/Testimonials'
import Services from './collections/Services'
import icon from '../public/favicon.ico'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    // @ts-ignore - Ignore "unused attribute" warning
    branding: {
      companyName: 'ETP Builders Portal', // ✅ Keep only this if logo isn't needed
    },

    meta: {
      titleSuffix: ' - ETP Portal',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: icon.src,
        },
      ],
    },
  },
  collections: [Users, Media, ContactUsForm, FAQs, Projects, Testimonials, Services],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
