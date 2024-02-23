import { Sponsor, SponsorOrderProps } from '@/types/contentful'
import Image from 'next/image'
import React from 'react'

const SponsorOrder: React.FC<SponsorOrderProps> = ({ sponsors }) => {
    sponsors.sort(
        (a: Sponsor, b: Sponsor) => b.fields.importance - a.fields.importance
    )

    return (
        <div className="">
            {/* Render the first sponsor */}
            <div className="grid grid-cols-1">
                <div key={sponsors[0].fields.importance} className="">
                    <Image
                        src={`https:${sponsors[0].fields.logoDarkmode.fields.file.url}`}
                        alt={sponsors[0].fields.logoDarkmode.fields.title}
                        width={150}
                        height={100}
                        priority={true}
                        className="dark:block hidden"
                    />
                    <Image
                        src={`https:${sponsors[0].fields.logoLightmode.fields.file.url}`}
                        alt={sponsors[0].fields.logoLightmode.fields.title}
                        width={150}
                        height={100}
                        priority={true}
                        className="block dark:hidden"
                    />
                    <h3>{sponsors[0].fields.sponsor}</h3>
                    <p>{sponsors[0].fields.description}</p>
                </div>
            </div>

            {/* Render the second and third sponsors */}
            <div className="grid grid-cols-2">
                {sponsors.slice(1, 3).map((sponsor: Sponsor, index: number) => (
                    <div key={index} className="">
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
                        <p>{sponsor.fields.description}</p>
                    </div>
                ))}
            </div>

            {/* Render the rest of the sponsors in rows of 3 */}
            <div className="grid grid-cols-3">
                {sponsors.slice(3).map((sponsor: Sponsor, index: number) => (
                    <div key={index} className="">
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
                        <p>{sponsor.fields.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SponsorOrder
