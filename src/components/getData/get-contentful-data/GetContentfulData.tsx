import { client } from '../../../../lib/contentful/client'

async function GetContentfulData(contentType?: string, slug?: string) {
    try {
        const res = await client.getEntries({
            content_type: contentType,
            'fields.title': slug
        })
        return res.items[0]
    } catch (error) {
        console.error(`Error fetching ${contentType} :`, error)
        throw error
    }
}

export default GetContentfulData
