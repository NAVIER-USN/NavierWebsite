import Link from 'next/link'
import React from 'react'

interface AdvertisementFields {
    position: string
    jobDescription: string
    active: boolean
    formUrl: string
    // Add other fields as needed
}

interface Advertisement {
    fields: AdvertisementFields
}

interface AdvertisementCardProps {
    advertisements: Advertisement[]
}

const AdvertisementCard = ({ advertisements }: AdvertisementCardProps) => {
    return (
        <div className="max-w-6xl md:flex justify-center mx-auto p-3 md:p-10">
            <div className="flex flex-wrap -mx-4">
                {advertisements.map((advertisement, index) =>
                    advertisement.fields.active ? (
                        <div
                            key={index}
                            className="lg:w-1/3 md:w-1/2 w-full px-4 mb-4"
                        >
                            <div className="bg-foreground-light dark:bg-foreground-dark p-6 rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold">
                                    {advertisement.fields.position}
                                </h2>
                                <p className="mt-2">
                                    {advertisement.fields.jobDescription}
                                </p>
                                <Link href={advertisement.fields.formUrl}>
                                    <button className="mt-3 p-1.5 rounded-md bg-blue-600 text-text-light hover:underline">
                                        Apply
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ) : null
                )}
            </div>
        </div>
    )
}

export default AdvertisementCard
