import Link from 'next/link'
import React from 'react'
import { FiPhone, FiMail } from 'react-icons/fi'
import GetContentfulData from '../getData/get-contentful-data/GetContentfulData'
import { SocialMedia } from './types'

const Footer = async () => {
    const footerData = await GetContentfulData('footer')

    if (!footerData) {
        throw new Error('Error loading footer data.')
    }

    const formattedPhoneNumber = footerData.phone
        .toString()
        .replace(/(\d{3})(\d{2})(\d{3})/, '$1 $2 $3')

    return (
        <footer className="bg-background-light text-text-dark p-4 border-solid border-t-2 border-gray-300 dark:border-gray-700 dark:text-text-light dark:bg-background-dark">
            <div className="flex flex-row justify-center">
                <div className="flex flex-col text-center md:text-left md:flex-row gap-6 md:gap-16">
                    <div>
                        <p className="font-bold">Social Media</p>
                        <div className="flex flex-col select-none">
                            {' '}
                            {footerData.socialMedia.map(
                                (media: SocialMedia, index: number) => (
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
                        <p className="font-bold">Address</p>
                        <ul>
                            <li>{footerData.address}</li>
                            <li>
                                {footerData.postalCode} {footerData.city}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold">Contact</p>
                        <ul>
                            <li className="flex flex-row items-center">
                                <FiPhone className="mr-2" />
                                +47 {formattedPhoneNumber}
                            </li>
                            <li className="flex flex-row items-center">
                                <FiMail className="mr-2" /> {footerData.email}
                            </li>
                        </ul>
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
