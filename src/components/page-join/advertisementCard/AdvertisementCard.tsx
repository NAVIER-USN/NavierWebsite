import Link from 'next/link'
import React from 'react'
import { AdvertisementCardProps } from './types'

const AdvertisementCard = ({ advertisements }: AdvertisementCardProps) => {
    const getBackgroundColor = (index: number) => {
        const colors = [
            'bg-cyan-100',
            'bg-purple-100',
            'bg-yellow-100',
            'bg-red-100',
            'bg-green-100',
            'bg-blue-100'
        ]
        return colors[index % colors.length]
    }

    return (
        <div className="max-w-6xl mx-auto py-3 md:py-10">
            <div className="flex flex-wrap gap-4 justify-around px-4">
                {advertisements && advertisements.length > 0 ? (
                    advertisements.map((advertisement, index) => {
                        if (advertisement.fields && advertisement.fields.active) {
                            return (
                                <div
                                    key={index}
                                    className="p-1 mt-6 w-64 bg-white rounded-xl flex flex-col"
                                >
                                    <div className={`w-full min-h-[16rem] ${getBackgroundColor(index)} text-black rounded-t-xl p-4`}>
                                        <h1 className="text-lg sm:text-xl md:text-2xl font-normal leading-tight mb-2">
                                            {advertisement.fields.position}
                                        </h1>
                                        <p className="text-xs sm:text-sm">
                                            {advertisement.fields.jobDescription}
                                        </p>
                                    </div>
                                    <div className="p-2 h-16 flex items-center justify-center bg-white">
                                        <Link
                                            href={advertisement.fields.formUrl}
                                            className="block"
                                        >
                                            <div className="bg-black w-20 h-8 flex items-center justify-center rounded-full">
                                                <p className="text-white text-sm">Apply</p>
                                            </div>
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