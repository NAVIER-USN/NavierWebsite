import React from 'react'
import EmailForm from '@/components/page-contact/email-form/EmailForm'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'
import { FiPhone, FiMail } from 'react-icons/fi'

export const generateMetadata = () => {
    return {
        title: `Get in touch`
    }
}

const ContactUsPage = async () => {
    const contact = await GetContentfulData('contactInfoPage')
    const footerData = await GetContentfulData('footer')

    if (!contact || !footerData) {
        throw new Error('Error loading contact page or footer data.')
    }

    const formattedPhoneNumber = footerData.phone
        .toString()
        .replace(/(\d{3})(\d{2})(\d{3})/, '$1 $2 $3')

    return (
        <main className="mt-32">
            <div className="max-w-6xl md:flex justify-center mx-auto py-3 px-8 md:p-10">
                <div className="lg:flex flex-row justify-center gap-10">
                    <div className="py-10 md:py-0">
                        <h3 className="text-2xl pb-2">Get in touch!</h3>
                        <p className="max-w-6xl">{contact.contactPageText}</p>
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-10">

                            <div className="p-6 rounded-lg shadow-md border border-gray-200">
                                <h4 className="text-xl font-semibold flex items-center">
                                    <FiPhone className="mr-2" />
                                    Phone
                                </h4>
                                <p className="mt-2 text-lg">+47 {formattedPhoneNumber}</p>
                            </div>

                            <div className="p-6 rounded-lg shadow-md border border-gray-200">
                                <h4 className="text-xl font-semibold flex items-center">
                                    <FiMail className="mr-2" />
                                    Email
                                </h4>
                                <p className="mt-2 text-lg">{footerData.email}</p>
                            </div>

                        </div>
                    </div>
                    <div className="max-w-lg pb-10 md:pb-0 w-full">
                        <h3 className="text-2xl pb-2 pt-8 lg:pt-0">Contact</h3>
                        <EmailForm />
                    </div>
                </div>
            </div>


        </main>
    )
}

export default ContactUsPage
