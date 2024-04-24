import { client } from '../../../../lib/contentful/client'

async function GetContentfulData(contentType: string) {
    try {
        const res = await client.getEntries({
            content_type: contentType
        })
        return res.items[0]
    } catch (error) {
        console.error('Error fetching logos:', error)
        throw error
    }
}

export default GetContentfulData
