import React from 'react'
import Image from 'next/image'
import { client } from '../../../lib/contentful/client'

const JoinPage = async () => {
    let join = []
    try {
        const response = await client.getEntries({ content_type: 'joinUsPage' })
        join = response.items
    } catch (error) {
        console.error('Error fetching logos:', error)
        throw error
    }

    return (
        <div>
            <h1>{join[0].fields.title}</h1>
            <p>{join[0].fields.information.content[0].content[0].value}</p>
            <p>{join[0].fields.howToApply.content[0].content[0].value}</p>
        </div>
    )
}

export default JoinPage
