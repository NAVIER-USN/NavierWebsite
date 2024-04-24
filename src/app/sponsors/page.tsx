import React from 'react'
import SponsorOrder from '@/components/page-sponsor/sponsor-card-and-order/SponsorOrder'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'

const SponsorsPage = async () => {
    const sponsors = await GetContentfulData('sponsorsPage')

    return (
        <main className="mx-auto sm:px-7 md:px-20 px-2">
            <SponsorOrder sponsors={sponsors.fields.sponsors} />
        </main>
    )
}

export default SponsorsPage
