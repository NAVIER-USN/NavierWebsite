import dynamic from 'next/dynamic'
import { client } from '../../lib/contentful/client'
import Image from 'next/image'
import FrontpageSponsorLayout from '@/components/page-home/sponsor-layout/FrontPageSponsorLayout'
import BasicModel from '@/components/page-home/basic-model/BasicModel'
import Hero from '@/components/page-home/hero/Hero'
import LinkedinSwiper from '@/components/page-home/linkedin-swiper/LinkedinSwiper'

/*
const EventMap = dynamic(
    () => import('@/components/page-home/event-map/EventMap'),
    {
        ssr: false
    }
    )
*/

// Instagram fetch
async function getData(url: string) {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

/*

async function getContentfulData(contentType: string) {
	const res = await client.getEntries({
		content_type: contentType
	})
	
    if (!res.ok) {
		throw new Error('Failed to fetch data')
    }
	
    return res.json()
}

*/
/*

const home = getContentfulData('homePage')
const sponsors = getContentfulData('sponsorsPage')
	
*/

export default async function HomePage() {
    const instagramUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.NAVIER_INSTAGRAM_ACCESS_TOKEN}&limit=10`
    const instagram = await getData(instagramUrl)
    let home = null
    let sponsors = null

    try {
        const homeRes = await client.getEntries({
            content_type: 'homePage'
        })
        const sponsorRes = await client.getEntries({
            content_type: 'sponsorsPage'
        })

        home = homeRes.items[0].fields
        sponsors = sponsorRes.items[0].fields.sponsors
    } catch (error) {
        console.error('Error fetching logos:', error)
        throw error
    }

    return (
        <main>
            <div>
                <Hero props={home.videoHomepageHero.fields} />
            </div>
            <h3 className="text-lg md:mt-32 py-4 text-center md:text-2xl font-semibold pt-5">
                The Students
            </h3>
            <div className="overflow-hidden flex flex-col justify-center items-center w-full">
                <Image
                    src={`https:${home.currentTeamGroupImage.fields.file.url}`}
                    alt={home.firstBigImage.fields.title}
                    priority={true}
                    width={4000}
                    height={2000}
                    className="max-w-3xl w-full object-cover"
                />
            </div>
            {/*<div className="overflow-hidden">
                <Image
                    src={`https:${home.firstBigImage.fields.file.url}`}
                    alt={home.firstBigImage.fields.title}
                    priority={true}
                    width={2000}
                    height={2000}
                    className="h-[100vh] min-w-full sm:min-w-none sm:max-h-[50vh] object-cover"
                />
            </div>*/}
            <h3 className="text-lg md:mt-32 py-4 text-center md:text-2xl font-semibold pt-5">
                The Solution
            </h3>
            <div className="h-[100vh] w-full py-6 md:py-0 bg-background-light dark:bg-background-dark">
                <BasicModel />
            </div>

            {/* EVENT MAP
            <h3 className="text-2xl text-center md:text-4xl pt-14 pb-4 p-0 md:p-10 font-semibold">
                Upcoming events
            </h3>
            <div className="flex flex-col mx-auto justify-center pb-14">
                <EventMap eventData={home.upcomingEvents} />
            </div>
            */}

            {/*

            <div className="overflow-hidden">
                <Image
                    src={`https:${home.secondBigImage.fields.file.url}`}
                    alt={home.firstBigImage.fields.title}
                    priority={true}
                    width={2000}
                    height={2000}
                    className="h-[100vh] min-w-full sm:min-w-none sm:max-h-[50vh] object-cover"
                />
            </div>
            */}
            <h3 className="text-2xl text-center md:text-4xl font-semibold pt-5">
                Instagram
            </h3>
            <div className="w-full max-w-[100vw] flex mx-auto sm:max-w-5xl h-full justify-center">
                <LinkedinSwiper imageProps={instagram.data} />
            </div>

            {/*
            <div className="overflow-hidden">
                <Image
                    src={`https:${home.thirdBigImage.fields.file.url}`}
                    alt={home.thirdBigImage.fields.title}
                    priority={true}
                    width={2000}
                    height={2000}
                    className="h-[100vh] min-w-full sm:min-w-none sm:max-h-[50vh] object-cover"
                />
            </div>
            */}
            <div className="flex flex-col justify-center py-32">
                <h3 className="text-2xl text-center md:text-4xl font-semibold">
                    Sponsors
                </h3>
                <div className="mx-auto sm:px-7 md:px-20 p-2">
                    <FrontpageSponsorLayout sponsors={sponsors} />
                </div>
            </div>
        </main>
    )
}
