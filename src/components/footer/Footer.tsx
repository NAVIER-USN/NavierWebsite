import Link from 'next/link'
import { client } from '../../../lib/contentful/client'
import React from 'react'

const Footer = async () => {
    let footerData = null

    try {
        const response = await client.getEntries({
            content_type: 'footer'
        })

        footerData = response.items[0].fields
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }

    console.log(footerData)

    const formattedPhoneNumber = footerData.phone
        .toString()
        .replace(/(\d{3})(\d{2})(\d{3})/, '$1 $2 $3')

    return (
        <footer className="bg-background-light text-text-dark p-4 border-solid border-t-2 border-gray-300 dark:border-gray-700 dark:text-text-light dark:bg-background-dark">
            <div className="flex flex-row justify-center">
                <div className="flex flex-row gap-6 md:gap-16">
                    <div>
                        <p className="font-bold">Social Media</p>
                        <div className="flex flex-col">
                            {footerData.socialMedia.map(
                                (media: any, index: number) => (
                                    <Link
                                        key={index}
                                        href={media.fields.url}
                                        className="underline cursor-pointer pr-3"
                                    >
                                        {media.fields.socialMedia}
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                    <div>
                        <p className="font-bold">Contact</p>
                        <p className="my-2">
                            +47 {formattedPhoneNumber}
                            {/*split numbers*/}
                        </p>
                        <p>{footerData.email}</p>
                        <div className="flex justify-center space-x-4 my-2"></div>
                    </div>
                </div>
            </div>
            <p className="text-sm mt-4 text-center">
                © {new Date().getFullYear()} {footerData.brand}. All rights
                reserved.
            </p>
        </footer>
    )
}

export default Footer
