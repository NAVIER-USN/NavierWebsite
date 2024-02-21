const contentful = require('contentful')

export const client = contentful.createClient({
  space: process.env.SPACE_ID!,
  accessToken: process.env.ACCESS_TOKEN!,
  host: 'cdn.contentful.com'
})
