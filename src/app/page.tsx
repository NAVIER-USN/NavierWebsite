import dynamic from 'next/dynamic'
import { client } from '../../lib/contentful/client'
import Image from 'next/image'
import FrontpageSponsorLayout from '@/components/page-home/sponsor-layout/FrontPageSponsorLayout'

const EventMap = dynamic(
    () => import('@/components/page-home/event-map/EventMap'),
    {
        ssr: false
    }
)

const HomePage = async () => {
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
            <div className="overflow-hidden">
                <Image
                    src={`https:${home.firstBigImage.fields.file.url}`}
                    alt={home.firstBigImage.fields.title}
                    priority={true}
                    width={2000}
                    height={2000}
                    className="h-[100vh] min-w-full sm:min-w-none sm:max-h-[50vh] object-cover"
                />
            </div>
            <div className="flex flex-col justify-center my-32">
                <h3 className="text-2xl text-center md:text-4xl pb-0 md:pb-6 font-semibold pt-5 md:pt-0">
                    Upcoming events
                </h3>

                <EventMap eventData={home.upcomingEvents} />
            </div>
            <div className="overflow-hidden ">
                <Image
                    src={`https:${home.secondBigImage.fields.file.url}`}
                    alt={home.firstBigImage.fields.title}
                    priority={true}
                    width={2000}
                    height={2000}
                    className="h-[100vh] min-w-full sm:min-w-none sm:max-h-[50vh] object-cover"
                />
            </div>
            <h3>INSTAGRAM FEED</h3>
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
            <div className="flex flex-col justify-center my-32">
                <h3 className="text-2xl text-center md:text-4xl  font-semibold ">
                    Sponsors and partners
                </h3>
                <div className="mx-auto sm:px-7 md:px-20 px-2">
                    <FrontpageSponsorLayout sponsors={sponsors} />
                </div>
            </div>
        </main>
    )
}
export default HomePage
