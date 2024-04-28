import { client } from '../../../../lib/contentful/client'

async function GetContentfulData(contentType?: string, slug?: string) {
    try {
        const res = await client.getEntries({
            content_type: contentType,
            'fields.title': slug
        })
        if (!res.items?.length) {
            return {
                redirect: {
                    destination: `/`,
                    permanent: false
                }
            }
        }

        const data = res.items[0].fields
        return {
            ...data,
            revalidate: 60
        }
    } catch (error) {
        console.error(`Error fetching ${contentType}:`, error)
        throw error
    }
}

export default GetContentfulData
