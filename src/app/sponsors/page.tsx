import React from 'react'
import SponsorOrder from '@/components/page-sponsor/sponsor-card-and-order/SponsorOrder'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'

export const generateMetadata = () => {
    return {
        title: `Sponsors`
    }
}

const SponsorsPage = async () => {
    const sponsors = await GetContentfulData('sponsorsPage')
    if (!sponsors) {
        throw new Error('Error loading sponsor data.')
    }

    return (
        <main className="mx-auto sm:px-7 md:px-20 px-2 mt-32">
            <SponsorOrder sponsors={sponsors.sponsors} />
        </main>
    )
}

export default SponsorsPage
