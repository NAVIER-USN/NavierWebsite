import { createClient } from 'contentful'

const client = createClient({
  space: process.env.SPACE_ID!,
  accessToken: process.env.ACCESS_TOKEN!,
  host: 'cdn.contentful.com'
})
