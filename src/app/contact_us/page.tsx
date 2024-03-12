import React from 'react'
import { client } from '../../../lib/contentful/client'
import EmailForm from '@/components/contact_us/email-form/EmailForm'

const ContactUsPage = async () => {
    let contact = []

    //Fetching contact us page
    try {
        const response = await client.getEntries({
            content_type: 'contactInfoPage'
        })
        contact = response.items[0].fields
    } catch (error) {
        console.error('Error fetching logos:', error)
        throw error
    }
    return (
        <div className="">
            <div>
                <div className="max-w-6xl md:flex justify-center mx-auto p-3 md:p-10">
                    <div className="md:flex  flex-row justify-center gap-10">
                        <div className="py-10 md:py-0">
                            <h3 className="text-xl md:text-2xl pb-2">
                                Get in touch!
                            </h3>
                            <p>{contact.contactPageText}</p>
                        </div>
                        <div className="pb-10 md:pb-0">
                            <h3 className="text-xl md:text-2xl pb-2">
                                Contact
                            </h3>
                            <EmailForm />
                        </div>
                    </div>
                </div>
                <div>{/* Card Component*/}</div>
            </div>
        </div>
    )
}

export default ContactUsPage
