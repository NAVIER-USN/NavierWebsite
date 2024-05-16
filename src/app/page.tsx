import Image from 'next/image'
import FrontpageSponsorLayout from '@/components/page-home/sponsor-layout/FrontPageSponsorLayout'
import BasicModel from '@/components/page-home/basic-model/BasicModel'
import Hero from '@/components/page-home/hero/Hero'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'
import { existsSync } from 'fs'
import { join } from 'path'

// import LinkedinSwiper from '@/components/page-home/linkedin-swiper/LinkedinSwiper'
// import GetRegularData from '@/components/getData/get-regular-data/GetRegularData'

export default async function HomePage() {
    // const instagramUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.NAVIER_INSTAGRAM_ACCESS_TOKEN}&limit=10`
    // const instagram = await GetRegularData(instagramUrl)
    const home = await GetContentfulData('homePage')
    const sponsors = await GetContentfulData('sponsorsPage')
    //Check if there is a 3d model
    const filePath = existsSync(
        join(process.cwd(), 'public', '3dmodel', 'model.glb')
    )
        ? '3dmodel/model.glb'
        : ''
    const path = filePath

    return (
        <main>
            <div>
                <Hero props={home.videoHomepageHero.fields} />
            </div>
            <div className="flex justify-center w-full">
                {/* Centering the max-width container */}
                <div className=" w-full">
                    {/* Max-width container for the sections */}
                    {/* Flex container for horizontal layout */}
                    <div className="xl:flex flex-wrap justify-center items-stretch xl:flex-nowrap">
                        {/* The Students Section */}
                        <div className="flex-1 text-center p-4 min-w-[50%]">
                            <h3 className="text-lg md:mt-32 py-4 md:text-2xl font-semibold">
                                The Students
                            </h3>
                            <div className="overflow-hidden flex justify-center items-center w-full">
                                <Image
                                    src={`https:${home.currentTeamGroupImage.fields.file.url}`}
                                    alt={home.firstBigImage.fields.title}
                                    priority={true}
                                    width={4000}
                                    height={2000}
                                    className="max-w-3xl w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* The Solution Section */}
                        <div className="flex-1 text-center p-4 min-w-[50%]">
                            <h3 className="text-lg md:mt-32 py-4 md:text-2xl font-semibold">
                                The Solution
                            </h3>
                            <div className="h-full w-full py-6 md:py-0 bg-background-light dark:bg-background-dark">
                                <BasicModel prop={path} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*
            <h3 className="text-2xl text-center md:text-4xl font-semibold pt-5">
			LinkedIn
            </h3>
            <div className="w-full max-w-[100vw] flex mx-auto sm:max-w-5xl h-full justify-center">
			<LinkedinSwiper imageProps={instagram.data} />
            </div>
		*/}
            <div className="flex flex-col justify-center mt-32">
                <h3 className="text-2xl text-center md:text-4xl font-semibold">
                    Sponsors
                </h3>
                <div className="mx-auto sm:px-7 md:px-20 p-2 mb-12">
                    <FrontpageSponsorLayout sponsors={sponsors.sponsors} />
                </div>
            </div>
        </main>
    )
}
