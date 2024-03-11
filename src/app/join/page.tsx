import React from 'react'
import { client } from '../../../lib/contentful/client'
import AdvertisementCard from '@/components/advertisementCard/AdvertisementCard'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const JoinPage = async () => {
    let join = []

    //Fetching join us page
    try {
        const response = await client.getEntries({ content_type: 'joinUsPage' })
        join = response.items[0].fields
    } catch (error) {
        console.error('Error fetching logos:', error)
        throw error
    }

    return (
        <div>
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
        </div>
    )
}

export default JoinPage
