import React from 'react'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'
import Competitions from '@/components/page-competitions/Competitions'

export const generateMetadata = () => {
    return {
        title: `Competitions`
    }
}

const CompetitionPage = async () => {
    const competitions = await GetContentfulData('competitionsPage')

    if (!competitions) {
        throw new Error('Error loading competition page data.')
    }
    return (
        <main className="mt-28 max-w-3xl mx-auto">
            <div className="pt-4 md:pt-6 p-4 md:p-0">
                <Competitions competitions={competitions.competitions} />
            </div>
        </main>
    )
}

export default CompetitionPage
