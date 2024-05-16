import { client } from '../../../../lib/contentful/client'

async function GetContentfulData(contentType?: string, slug?: string) {
    try {
        const res = await client.getEntries({
            content_type: contentType,
            'fields.title': slug
        })
        if (res.items[0]) {
            const data = res.items[0].fields
            return {
                ...data
            }
        }
    } catch (error) {
        console.error(`Error fetching ${contentType}:`, error)

        throw new Error('ERROR FETCHING')
    }
}

export default GetContentfulData
