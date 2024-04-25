import Image from 'next/image'
import React from 'react'
import { Sponsor, SponsorProps } from '@/types/contentful'
import Link from 'next/link'

const FrontpageSponsorLayout = ({ sponsors }: SponsorProps) => {
    const sortedSponsors = [...sponsors].sort(
        (a, b) => b.fields.importance - a.fields.importance
    )

    return (
        <div className="max-w-5xl">
            {' '}
            <Link href={sortedSponsors[0].fields.url}>
                <div className="max-w-96 mx-auto py-8">
                    <Image
                        src={`https:${sortedSponsors[0].fields.logoDarkmode.fields.file.url}`}
                        alt={sortedSponsors[0].fields.logoDarkmode.fields.title}
                        width={1000}
                        height={1000}
                        priority={true}
                        className="dark:block hidden w-full object-contain"
                    />
                    <Image
                        src={`https:${sortedSponsors[0].fields.logoLightmode.fields.file.url}`}
                        alt={
                            sortedSponsors[0].fields.logoLightmode.fields.title
                        }
                        width={1000}
                        height={1000}
                        priority={true}
                        className="block dark:hidden w-full object-contain"
                    />
                </div>
            </Link>
            <div className="grid grid-cols-3 grid-rows-auto gap-4 items-center">
                {sortedSponsors
                    .slice(1)
                    .map((sponsor: Sponsor, index: number) => (
                        <div
                            key={index}
                            className="flex justify-center max-h-32 max-w-64"
                        >
                            <Link href={sponsor.fields.url}>
                                <Image
                                    src={`https:${sponsor.fields.logoDarkmode.fields.file.url}`}
                                    alt={
                                        sponsor.fields.logoDarkmode.fields.title
                                    }
                                    width={1000}
                                    height={1000}
                                    priority={true}
                                    className="dark:block hidden w-full object-contain"
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
                                    className="block dark:hidden w-full object-contain"
                                />
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default FrontpageSponsorLayout
