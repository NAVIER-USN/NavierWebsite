import { Sponsor, SponsorProps } from '@/types/contentful'
import Link from 'next/link'
import React from 'react'
import {FiLink, FiChevronRight } from 'react-icons/fi'

const SponsorOrder = ({ sponsors }: SponsorProps) => {
    const defaultStylingCard =
        'bg-foreground-light dark:bg-foreground-dark shadow-xl rounded-lg p-6'
    const sponsorNameStyling = 'text-2xl font-semibold pt-12 pb-3'
    const sponsorDescriptionStyling = ''
    const imageDarkmodeStyling = 'dark:block hidden w-full object-contain'
    const imageLightmodeStyling = 'block dark:hidden w-full object-contain'
    const imageContainerPositioning =
        'min-h-64 w-full flex flex-col items-center justify-center overflow-hidden'
    const textContainerPositioning = 'w-full'

    const sortedSponsors = [...sponsors].sort(
        (a, b) => b.fields.importance - a.fields.importance
    )
    return (
        <div className="flex flex-col items-center gap-16 py-20">
            <div className="w-full max-w-4xl px-4">
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-[2px]">
                    <div className="relative rounded-3xl bg-white dark:bg-gray-800">
                        <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-black/[0.05]" />
                        <div className="absolute -left-4 top-0 h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-20 mix-blend-multiply blur-xl filter dark:bg-purple-600 dark:opacity-10" />
                        <div className="absolute -right-4 top-0 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-20 mix-blend-multiply blur-xl filter dark:bg-yellow-600 dark:opacity-10" />
                        
                   <div className="relative">
                        <div className="min-h-[20rem] w-full p-8">
                            <div className="flex h-full items-center justify-center">
                                    <img
                                        src={`https:${sortedSponsors[0].fields.logoDarkmode.fields.file.url}`}
                                        alt={sortedSponsors[0].fields.logoDarkmode.fields.title}
                                        className="hidden h-96 w-auto object-contain dark:block"
                                    />
                                    <img
                                        src={`https:${sortedSponsors[0].fields.logoLightmode.fields.file.url}`}
                                        alt={sortedSponsors[0].fields.logoLightmode.fields.title}
                                        className="block h-96 w-auto object-contain dark:hidden"
                                    />
                                </div>
                            </div>
    
                            <div className="space-y-4 p-8 pb-12">
                                <h3 className="relative bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-3xl font-black text-transparent">
                                    {sortedSponsors[0].fields.sponsor}
                                </h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    {sortedSponsors[0].fields.description}
                                </p>
                                <a
                                    href={sortedSponsors[0].fields.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-gray-600 transition-all duration-300 hover:gap-3 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                >
                                    <FiLink className="h-4 w-4" />
                                    <span>Visit sponsor</span>
                                    <FiChevronRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="grid w-full max-w-7xl gap-8 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {sortedSponsors.slice(1).map((sponsor, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 p-[2px] transition-all duration-300"
                    >
                        <div className="relative h-full rounded-2xl bg-white dark:bg-gray-800">
                            <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-black/[0.05]" />
                            <div className="absolute -left-4 top-0 h-40 w-40 animate-blob rounded-full bg-blue-300 opacity-20 mix-blend-multiply blur-xl filter dark:bg-blue-600 dark:opacity-10" />
                            
                            <div className="relative">
                                <div className="min-h-[12rem] w-full p-6">
                                    <div className="flex h-full items-center justify-center">
                                        <img
                                            src={`https:${sponsor.fields.logoDarkmode.fields.file.url}`}
                                            alt={sponsor.fields.logoDarkmode.fields.title}
                                            className="hidden h-24 w-auto object-contain dark:block"
                                        />
                                        <img
                                            src={`https:${sponsor.fields.logoLightmode.fields.file.url}`}
                                            alt={sponsor.fields.logoLightmode.fields.title}
                                            className="block h-24 w-auto object-contain dark:hidden"
                                        />
                                    </div>
                                </div>
    
                                <div className="space-y-3 p-6">
                                    <h3 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-xl font-bold text-transparent">
                                        {sponsor.fields.sponsor}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        {sponsor.fields.description}
                                    </p>
                                    <a
                                        href={sponsor.fields.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-gray-600 transition-all duration-300 hover:gap-3 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                    >
                                        <FiLink className="h-4 w-4" />
                                        <span>Visit sponsor</span>
                                        <FiChevronRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SponsorOrder
