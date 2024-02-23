import React from 'react'
import Image from 'next/image'
import { client } from '../../../lib/contentful/client'

interface Sponsor {
    fields: {
        logoDarkmode: {
            fields: {
                file: {
                    url: string
                }
                title: string
            }
        }
        logoLightmode: {
            fields: {
                file: {
                    url: string
                }
                title: string
            }
        }
        sponsor: string
    }
}

const SponsorsPage = async () => {
    let sponsors = []

    //Fetching sponsors
    try {
        const response = await client.getEntries({
            content_type: 'sponsorsPage'
        })
        sponsors = response.items
    } catch (error) {
        console.error('Error fetching logos:', error)
        throw error
    }

    return (
        <div>
            {sponsors[0].fields.sponsors.map(
                (sponsor: Sponsor, index: number) => {
                    return (
                        <div key={index}>
                            <Image
                                src={`https:${sponsor.fields.logoDarkmode.fields.file.url}`}
                                alt={sponsor.fields.logoDarkmode.fields.title}
                                width={150}
                                height={100}
                                priority={true}
                                className="dark:block hidden"
                            />
                            <Image
                                src={`https:${sponsor.fields.logoLightmode.fields.file.url}`}
                                alt={sponsor.fields.logoLightmode.fields.title}
                                width={150}
                                height={100}
                                priority={true}
                                className="block dark:hidden"
                            />

                            <h3>{sponsor.fields.sponsor}</h3>
                        </div>
                    )
                }
            )}
        </div>
    )
}

export default SponsorsPage
