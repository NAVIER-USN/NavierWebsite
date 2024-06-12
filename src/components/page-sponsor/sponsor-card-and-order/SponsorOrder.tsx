import { Sponsor, SponsorProps } from '@/types/contentful'
import Link from 'next/link'
import React from 'react'

const SponsorOrder = ({ sponsors }: SponsorProps) => {
    //Styling
    const defaultStylingCard =
        'bg-foreground-light dark:bg-foreground-dark shadow-xl rounded-lg p-6'
    const sponsorNameStyling = 'text-2xl font-semibold pt-12 pb-3'
    const sponsorDescriptionStyling = ''
    const imageDarkmodeStyling = 'dark:block hidden w-full object-contain'
    const imageLightmodeStyling = 'block dark:hidden w-full object-contain'
    //Positioning
    const imageContainerPositioning =
        'min-h-64 w-full flex flex-col items-center justify-center overflow-hidden'
    const textContainerPositioning = 'w-full'

    const sortedSponsors = [...sponsors].sort(
        (a, b) => b.fields.importance - a.fields.importance
    )
    return (
        <div className="flex flex-col items-center gap-10 py-10">
            {/* First sponsor */}
            <div className="max-w-lg items-center">
                <div className={`${defaultStylingCard} row-span-2 `}>
                    <div className={`${imageContainerPositioning}`}>
                        <Link
                            href={sortedSponsors[0].fields.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={`https:${sortedSponsors[0].fields.logoDarkmode.fields.file.url}`}
                                alt={
                                    sortedSponsors[0].fields.logoDarkmode.fields
                                        .title
                                }
                                width={1000}
                                height={1000}
                                className={`${imageDarkmodeStyling}`}
                            />
                            <img
                                src={`https:${sortedSponsors[0].fields.logoLightmode.fields.file.url}`}
                                alt={
                                    sortedSponsors[0].fields.logoLightmode
                                        .fields.title
                                }
                                width={1000}
                                height={1000}
                                className={`${imageLightmodeStyling}`}
                            />
                        </Link>
                    </div>

                    <div className={`${textContainerPositioning} `}>
                        <h3 className={`${sponsorNameStyling}`}>
                            {sortedSponsors[0].fields.sponsor}
                        </h3>
                        <p className={`${sponsorDescriptionStyling}`}>
                            {sortedSponsors[0].fields.description}
                        </p>
                    </div>
                </div>
            </div>
            {/* Rest of the sponsors in rows of 3 */}
            <div
                className={`grid row-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 max-w-6xl`}
            >
                {sortedSponsors
                    .slice(1)
                    .map((sponsor: Sponsor, index: number) => (
                        <div
                            key={index}
                            className={`${defaultStylingCard} max-w-80`}
                        >
                            <Link
                                href={sponsor.fields.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className={`${imageContainerPositioning}`}>
                                    <img
                                        src={`https:${sponsor.fields.logoDarkmode.fields.file.url}`}
                                        alt={
                                            sponsor.fields.logoDarkmode.fields
                                                .title
                                        }
                                        width={1000}
                                        height={1000}
                                        className={`${imageDarkmodeStyling}`}
                                    />
                                    <img
                                        src={`https:${sponsor.fields.logoLightmode.fields.file.url}`}
                                        alt={
                                            sponsor.fields.logoLightmode.fields
                                                .title
                                        }
                                        width={1000}
                                        height={1000}
                                        className={`${imageLightmodeStyling}`}
                                    />
                                </div>
                            </Link>
                            <div className="flex flex-col justify-between">
                                <h3 className={`${sponsorNameStyling}`}>
                                    {sponsor.fields.sponsor}
                                </h3>
                                <p>{sponsor.fields.description}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default SponsorOrder
