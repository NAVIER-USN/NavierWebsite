import EventMap from '@/components/page-home/event-map/EventMap'
import { client } from '../../lib/contentful/client'
import Image from 'next/image'

const HomePage = async () => {
    let home = null

    try {
        const response = await client.getEntries({
            content_type: 'homePage'
        })
        home = response.items[0].fields
    } catch (error) {
        console.error('Error fetching logos:', error)
        throw error
    }

    return (
        <main>
            <div className="overflow-hidden">
                <Image
                    src={`https://${home.firstBigImage.fields.file.url}`}
                    alt={home.firstBigImage.fields.title}
                    priority={true}
                    width={2000}
                    height={2000}
                    className="h-[100vh] min-w-full sm:min-w-none sm:max-h-[50vh] object-cover"
                />
            </div>
            <h3>MAP</h3>
            <EventMap eventData={home.upcomingEvents} />
            <div className="overflow-hidden">
                <Image
                    src={`https://${home.secondBigImage.fields.file.url}`}
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
                    src={`https://${home.thirdBigImage.fields.file.url}`}
                    alt={home.thirdBigImage.fields.title}
                    priority={true}
                    width={2000}
                    height={2000}
                    className="h-[100vh] min-w-full sm:min-w-none sm:max-h-[50vh] object-cover"
                />
            </div>
            <h3>SPONSORS</h3>
        </main>
    )
}
export default HomePage

/*		
			3D MODEL
				<div className="flex justify-center items-center h-full w-full">
					<div style={{ height: '80vh', width: '80vw' }}>
						{modelUrl && <ModelRendererClient modelUrl={modelUrl} />}
					</div>
				</div>
*/
