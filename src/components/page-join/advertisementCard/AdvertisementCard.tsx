import Link from 'next/link'
import React from 'react'
import { AdvertisementCardProps } from './types'

const AdvertisementCard = ({ advertisements }: AdvertisementCardProps) => {
    return (
        <div className="max-w-6xl md:flex justify-center mx-auto p-3 md:p-10">
            <div className="flex flex-wrap mx-4">
                {advertisements && advertisements.length > 0 ? (
                    advertisements.map((advertisement, index) => {
                        // Check if the advertisement has the expected structure
                        if (
                            advertisement.fields &&
                            advertisement.fields.active
                        ) {
                            return (
                                <div
                                    key={index}
                                    className="lg:w-1/3 md:w-1/2 w-full p-4"
                                >
                                    <div className="bg-foreground-light dark:bg-foreground-dark p-6 rounded-lg shadow-md">
                                        <h2 className="text-lg font-semibold">
                                            {advertisement.fields.position}
                                        </h2>
                                        <p className="mt-2">
                                            {
                                                advertisement.fields
                                                    .jobDescription
                                            }
                                        </p>
                                        <Link
                                            href={advertisement.fields.formUrl}
                                        >
                                            <button className="mt-3 p-1.5 rounded-md bg-button-light dark:bg-button-dark text-lg text-text-light hover:underline">
                                                Apply
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                        return null
                    })
                ) : (
                    <h3>No positions found.</h3>
                )}
            </div>
        </div>
    )
}

export default AdvertisementCard
