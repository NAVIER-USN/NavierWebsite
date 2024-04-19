import Image from 'next/image'
import FrontpageSponsorLayout from '@/components/page-home/sponsor-layout/FrontPageSponsorLayout'
import BasicModel from '@/components/page-home/basic-model/BasicModel'
import Hero from '@/components/page-home/hero/Hero'
import LinkedinSwiper from '@/components/page-home/linkedin-swiper/LinkedinSwiper'
import GetRegularData from '@/components/getData/get-regular-data/GetRegularData'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'

export default async function HomePage() {
    const instagramUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.NAVIER_INSTAGRAM_ACCESS_TOKEN}&limit=10`
    const instagram = await GetRegularData(instagramUrl)
    const home = await GetContentfulData('homePage')
    const sponsors = await GetContentfulData('sponsorsPage')

    return (
        <main>
            <div>
                <Hero props={home.fields.videoHomepageHero.fields} />
            </div>
            <h3 className="text-lg md:mt-32 py-4 text-center md:text-2xl font-semibold pt-5">
                The Students
            </h3>
            <div className="overflow-hidden flex flex-col justify-center items-center w-full">
                <Image
                    src={`https:${home.fields.currentTeamGroupImage.fields.file.url}`}
                    alt={home.fields.firstBigImage.fields.title}
                    priority={true}
                    width={4000}
                    height={2000}
                    className="max-w-3xl w-full object-cover"
                />
            </div>
            <h3 className="text-lg md:mt-32 py-4 text-center md:text-2xl font-semibold pt-5">
                The Solution
            </h3>
            <div className="h-[100vh] w-full py-6 md:py-0 bg-model-background-light dark:bg-model-background-dark">
                <BasicModel />
            </div>
            <h3 className="text-2xl text-center md:text-4xl font-semibold pt-5">
                Instagram
            </h3>
            <div className="w-full max-w-[100vw] flex mx-auto sm:max-w-5xl h-full justify-center">
                <LinkedinSwiper imageProps={instagram.data} />
            </div>

            <div className="flex flex-col justify-center py-32">
                <h3 className="text-2xl text-center md:text-4xl font-semibold">
                    Sponsors
                </h3>
                <div className="mx-auto sm:px-7 md:px-20 p-2">
                    <FrontpageSponsorLayout
                        sponsors={sponsors.fields.sponsors}
                    />
                </div>
            </div>
        </main>
    )
}
