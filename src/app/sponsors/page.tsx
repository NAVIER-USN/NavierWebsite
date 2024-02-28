import React from 'react'
import { client } from '../../../lib/contentful/client'
import SponsorOrder from '@/components/sponsor-order/SponsorOrder'

const SponsorsPage = async () => {
    let sponsors = []

    //Fetching sponsors
    try {
        const response = await client.getEntries({
            content_type: 'sponsorsPage'
        })
        sponsors = response.items[0].fields.sponsors
    } catch (error) {
        console.error('Error fetching logos:', error)
        throw error
    }

    return (
        <div className="mx-auto sm:px-7 md:px-20 px-2">
            <SponsorOrder sponsors={sponsors} />
        </div>
    )
}

export default SponsorsPage
