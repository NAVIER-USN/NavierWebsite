import React from 'react'
import { client } from '../../../lib/contentful/client'

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

    return (
        <main>
            <div className="max-w-5xl flex flex-col justify-center items-center mx-auto">
                {aboutUs.fields.purposes.map(
                    (purpose: AboutTypes, index: number) => (
                        <div key={index}>
                            <div>
                                {purpose.fields.title && (
                                    <h3 className="text-lg text-text-dark dark:text-text-light">
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

                {aboutUs.fields.goals.map((goal: AboutTypes, index: number) => (
                    <div key={index}>
                        <div>
                            {goal.fields.title && (
                                <h3 className="text-lg text-text-dark dark:text-text-light">
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
                ))}
            </div>
        </main>
    )
}

export default AboutPage
/*

                                <div>
                                    <p className="text-md text-text-dark dark:text-text-light">
                                        {purpose.fields.text}
                                    </p>
                                </div>

*/
