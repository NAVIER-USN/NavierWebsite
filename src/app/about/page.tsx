import React from 'react'
import Image from 'next/image'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'
import { AboutTypes } from './types'

export const generateMetadata = () => {
    return {
        title: `About`
    }
}

const AboutPage = async () => {
    const aboutUs = await GetContentfulData('aboutUsPage')

    if (!aboutUs) {
        throw new Error('Error loading aboutpage data.')
    }

    return (
        <main className="mt-32 max-w-4xl mx-auto p-2 sm:p-4 md:p-6 lg:p-0">
            <div>
                <div className=" overflow-hidden flex flex-col justify-center items-center">
                    <Image
                        src={`https:${aboutUs.teamGroupPhoto.fields.file.url}`}
                        alt={aboutUs.teamGroupPhoto.fields.title}
                        priority={true}
                        width={4000}
                        height={2000}
                        className="w-full object-cover"
                    />
                </div>
                <div>
                    <div className="pt-6 md:pt-16">
                        {aboutUs.aboutParagraphRef.map(
                            (purpose: AboutTypes, index: number) => (
                                <div key={index}>
                                    <div>
                                        {purpose.fields.title && (
                                            <h3 className="text-xl md:text-2xl pb-6 md:pb-3 text-text-dark dark:text-text-light text-center">
                                                {purpose.fields.title}
                                            </h3>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-md text-text-dark dark:text-text-light">
                                            {purpose.fields.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                    <div className="pt-6 md:pt-16">
                        {aboutUs.purposes.map(
                            (purpose: AboutTypes, index: number) => (
                                <div key={index}>
                                    <div>
                                        {purpose.fields.title && (
                                            <h3 className="text-xl md:text-2xl pb-6 md:pb-3 text-text-dark dark:text-text-light text-center">
                                                {purpose.fields.title}
                                            </h3>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-md text-text-dark dark:text-text-light">
                                            {purpose.fields.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                    <div className="py-6 md:py-16">
                        {aboutUs.goals.map(
                            (goal: AboutTypes, index: number) => (
                                <div key={index}>
                                    <div>
                                        {goal.fields.title && (
                                            <h3 className="text-xl md:text-2xl pb-3 text-text-dark dark:text-text-light text-center">
                                                {goal.fields.title}
                                            </h3>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-md text-text-dark dark:text-text-light">
                                            {goal.fields.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutPage
