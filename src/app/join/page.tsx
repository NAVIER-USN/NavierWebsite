import React from 'react'
import AdvertisementCard from '@/components/page-join/advertisementCard/AdvertisementCard'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'

export const generateMetadata = () => {
    return {
        title: `Join`
    }
}

const JoinPage = async () => {
    const join = await GetContentfulData('joinUsPage')

    if (!join) {
        throw new Error('Error loading joinpage data.')
    }

    return (
        <main className="mt-32">
            <div className="max-w-6xl md:flex justify-center mx-auto p-3 md:p-10">
                <div className="md:flex  flex-row justify-center gap-10">
                    <div className="py-10 md:py-0">
                        <h3 className="text-xl md:text-2xl pb-2">
                            Joining Navier?
                        </h3>
                        <p>{join.information.content[0].content[0].value}</p>
                    </div>
                    <div className="pb-10 md:pb-0">
                        <h3 className="text-xl md:text-2xl pb-2">
                            Who can join?
                        </h3>
                        <p>{join.howToApply.content[0].content[0].value}</p>
                    </div>
                </div>
            </div>
            <div>
                <AdvertisementCard advertisements={join.advertisement} />
            </div>
        </main>
    )
}

export default JoinPage
