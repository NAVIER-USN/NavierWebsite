import React from 'react'
import EmailForm from '@/components/page-contact/email-form/EmailForm'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'

const ContactUsPage = async () => {
    const contact = await GetContentfulData('contactInfoPage')

    return (
        <main className="mt-32">
            <div className="max-w-6xl md:flex justify-center mx-auto p-3 md:p-10">
                <div className="lg:flex flex-row justify-center gap-10">
                    <div className="py-10 md:py-0">
                        <h3 className="text-2xl pb-2">Get in touch!</h3>
                        <p className="max-w-6xl">{contact.contactPageText}</p>
                    </div>
                    <div className="max-w-lg pb-10 md:pb-0 w-full">
                        <h3 className="text-2xl pb-2 pt-8 lg:pt-0">Contact</h3>
                        <EmailForm />
                    </div>
                </div>
            </div>
            <div>{/* Card Component*/}</div>
        </main>
    )
}

export default ContactUsPage
