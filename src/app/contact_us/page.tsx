import React from 'react'
import Image from 'next/image'
import { client } from '../../../lib/contentful/client'

const ContactUsPage = async () => {
    let contact = []

    //Fetching contact us page
    try {
        const response = await client.getEntries({
            content_type: 'contactInfoPage'
        })
        contact = response.items
    } catch (error) {
        console.error('Error fetching logos:', error)
        throw error
    }
    console.log('contact page', contact[0])
    return (
        <div>
            <h1>{contact[0].fields.title}</h1>
        </div>
    )
}

export default ContactUsPage
