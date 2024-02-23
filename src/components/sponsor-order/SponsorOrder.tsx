import { Sponsor, SponsorOrderProps } from '@/types/contentful'
import Image from 'next/image'
import React from 'react'

const SponsorOrder: React.FC<SponsorOrderProps> = ({ sponsors }) => {
    //Styling
    const defaultStylingCard =
        'bg-foreground-light dark:bg-foreground-dark shadow-xl rounded-lg p-6 h-full'
    const sponsorNameStyling = 'text-xl font-semibold pt-12 pb-3'
    const sponsorDescriptionStyling = ''
    const imageDarkmodeStyling =
        'dark:block hidden w-full max-h-64 object-contain'
    const imageLightmodeStyling =
        'block dark:hidden w-full max-h-64 object-contain'
    //Positioning
    const sponsorContainerPositioning =
        'flex flex-col md:flex-row items-center flex items-stretch'
    const imageContainerPositioning =
        'h-64 w-full md:w-full flex-1 flex items-center justify-center'
    const textContainerPositioning = 'w-full md:w-full flex-1'

    const sortedSponsors = [...sponsors].sort(
        (a, b) => b.fields.importance - a.fields.importance
    )

    return (
        <div className="flex flex-col items-center gap-10 py-4">
            {/* First sponsor */}
            <div className={`${defaultStylingCard} max-w-4xl`}>
                <Image
                    src={`https:${sortedSponsors[0].fields.logoDarkmode.fields.file.url}`}
                    alt={sortedSponsors[0].fields.logoDarkmode.fields.title}
                    width={1000}
                    height={1000}
                    priority={true}
                    className={`${imageDarkmodeStyling}`}
                />
                <Image
                    src={`https:${sortedSponsors[0].fields.logoLightmode.fields.file.url}`}
                    alt={sortedSponsors[0].fields.logoLightmode.fields.title}
                    width={1000}
                    height={1000}
                    priority={true}
                    className={`${imageLightmodeStyling}`}
                />

                <div className={`${textContainerPositioning} `}>
                    <h3 className={`${sponsorNameStyling}`}>
                        {sortedSponsors[0].fields.sponsor}
                    </h3>
                    <p className={`${sponsorDescriptionStyling}`}>
                        {sortedSponsors[0].fields.description}
                    </p>
                </div>
            </div>

            {/* Second and third sponsors */}
            <div className="flex items-center gap-10 max-w-5xl">
                {sortedSponsors
                    .slice(1, 3)
                    .map((sponsor: Sponsor, index: number) => (
                        <div key={index} className={`${defaultStylingCard}`}>
                            <Image
                                src={`https:${sponsor.fields.logoDarkmode.fields.file.url}`}
                                alt={sponsor.fields.logoDarkmode.fields.title}
                                width={1000}
                                height={1000}
                                priority={true}
                                className={`${imageDarkmodeStyling}`}
                            />
                            <Image
                                src={`https:${sponsor.fields.logoLightmode.fields.file.url}`}
                                alt={sponsor.fields.logoLightmode.fields.title}
                                width={1000}
                                height={1000}
                                priority={true}
                                className={`${imageLightmodeStyling}`}
                            />
                            <h3 className={`${sponsorNameStyling}`}>
                                {sponsor.fields.sponsor}
                            </h3>
                            <p>{sponsor.fields.description}</p>
                        </div>
                    ))}
            </div>

            {/* Rest of the sponsors in rows of 3 */}
            <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 max-w-6xl">
                {sortedSponsors
                    .slice(3)
                    .map((sponsor: Sponsor, index: number) => (
                        <div key={index} className="w-full">
                            <div className={`${defaultStylingCard}`}>
                                <div className={`${imageContainerPositioning}`}>
                                    <Image
                                        src={`https:${sponsor.fields.logoDarkmode.fields.file.url}`}
                                        alt={
                                            sponsor.fields.logoDarkmode.fields
                                                .title
                                        }
                                        width={1000}
                                        height={1000}
                                        priority={true}
                                        className={`${imageDarkmodeStyling}`}
                                    />
                                    <Image
                                        src={`https:${sponsor.fields.logoLightmode.fields.file.url}`}
                                        alt={
                                            sponsor.fields.logoLightmode.fields
                                                .title
                                        }
                                        width={1000}
                                        height={1000}
                                        priority={true}
                                        className={`${imageLightmodeStyling}`}
                                    />
                                </div>
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
