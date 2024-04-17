import React from 'react'
import { client } from '../../../lib/contentful/client'
import Image from 'next/image'

type AboutTypes = {
    fields: {
        title?: string
        text: string
    }
}

async function getContentfulData(contentType: string) {
    try {
        const res = await client.getEntries({
            content_type: contentType
        })
        return res.items[0]
    } catch (error) {
        console.error('Error fetching logos:', error)
        throw error
    }
}
const AboutPage = async () => {
    const aboutUs = await getContentfulData('aboutUsPage')
    console.log(aboutUs.fields)

    return (
        <main>
            <div className="flex flex-col justify-center items-center mx-auto">
                <div className="max-h-80 overflow-hidden flex flex-col justify-center items-center sm:max-w-[40vw]">
                    <Image
                        src={`https:${aboutUs.fields.teamGroupPhoto.fields.file.url}`}
                        alt={aboutUs.fields.teamGroupPhoto.fields.title}
                        priority={true}
                        width={4000}
                        height={2000}
                        className="w-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-center items-center max-w-5xl">
                    <div className="pt-6 md:pt-16">
                        {aboutUs.fields.aboutParagraphRef.map(
                            (purpose: AboutTypes, index: number) => (
                                <div key={index}>
                                    <div>
                                        {purpose.fields.title && (
                                            <h3 className="text-xl md:text-2xl pb-3 text-text-dark dark:text-text-light text-center">
                                                {purpose.fields.title}
                                            </h3>
                                        )}
                                    </div>
                                    <div>
                                        <p className="px-4 text-md text-text-dark dark:text-text-light">
                                            {purpose.fields.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                    <div className="pt-6 md:pt-16">
                        {aboutUs.fields.purposes.map(
                            (purpose: AboutTypes, index: number) => (
                                <div key={index}>
                                    <div>
                                        {purpose.fields.title && (
                                            <h3 className="text-xl md:text-2xl pb-3 text-text-dark dark:text-text-light text-center">
                                                {purpose.fields.title}
                                            </h3>
                                        )}
                                    </div>
                                    <div>
                                        <p className="px-4 text-md text-text-dark dark:text-text-light">
                                            {purpose.fields.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                    <div className="py-6 md:py-16">
                        {aboutUs.fields.goals.map(
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
                                        <p className="px-4 text-md text-text-dark dark:text-text-light">
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
