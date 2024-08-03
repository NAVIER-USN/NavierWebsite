import FrontpageSponsorLayout from '@/components/page-home/sponsor-layout/FrontPageSponsorLayout'
import BasicModel from '@/components/page-home/basic-model/BasicModel'
import Hero from '@/components/page-home/hero/Hero'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'
import InstagramSwiper from '@/components/page-home/instagram-swiper/InstagramSwiper'
import GetRegularData from '@/components/getData/get-regular-data/GetRegularData'

export default async function HomePage() {
    const instagramUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.NAVIER_INSTAGRAM_ACCESS_TOKEN}&limit=10`
    const instagram = await GetRegularData(instagramUrl)
    const home = await GetContentfulData('homePage')
    const sponsors = await GetContentfulData('sponsorsPage')

    if (!home) {
        throw new Error('Error loading homepage data.')
    }

    if (!sponsors) {
        throw new Error('Error loading sponsor data.')
    }

    const path = '3dmodel/model.glb'

    return (
        <main>
            <Hero props={home.videoHomepageHero.fields} />

            <div className="flex justify-center w-full">
                <div className=" w-full">
                    <div className="xl:flex flex-wrap justify-center items-stretch xl:flex-nowrap md:pt-20 max-w-5xl mx-auto">
                        {/* The Students Section */}
                        <div className="flex-1 text-center min-w-[65%]">
                            <div className="overflow-hidden flex justify-center items-center w-full">
                                <img
                                    src={`https:${home.currentTeamGroupImage.fields.file.url}`}
                                    alt={
                                        home.currentTeamGroupImage.fields.title
                                    }
                                    width={4000}
                                    height={2000}
                                    className="max-w-3xl w-full object-cover select-none"
                                />
                            </div>
                        </div>
                        <div className="flex-1 min-w-[35%] max-w-3xl mx-auto pt-10 lg:pt-0">
                            <h3 className="text-lg md:text-2xl font-semibold select-none px-4">
                                The Students
                            </h3>
                            <div className="h-full w-full py-6 md:py-0 select-none px-4">
                                <p>{home.theStudents}</p>
                            </div>
                        </div>
                    </div>
                    {/* The Solution Section */}
                    <div className="xl:flex flex-wrap justify-center items-stretch xl:flex-nowrap md:pt-40 max-w-5xl mx-auto">
                        <div className="flex-1 min-w-[35%] max-w-3xl mx-auto pt-10 lg:pt-0">
                            <h3 className="text-lg md:text-2xl font-semibold select-none px-4">
                                The Solution
                            </h3>
                            <div className="overflow-hidden flex justify-center w-full px-4">
                                <p>{home.theSolution}</p>
                            </div>
                        </div>

                        <div className="flex-1 text-center min-w-[65%]">
                            <h3 className="text-lg md:text-2xl font-semibold select-none"></h3>
                            <div className="h-full w-full py-10 md:py-0  select-none">
                                <BasicModel prop={path} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="text-2xl text-center md:text-4xl font-semibold md:pt-40">
                Instagram
            </h3>

            {/*
             <div className="max-w-5xl mx-auto">
                <InstagramSwiper imageProps={instagram.data} />
            </div>
                 */}

            <div className="flex flex-col justify-center pt-20 select-none">
                <h3 className="text-2xl text-center md:text-4xl font-semibold">
                    Sponsors
                </h3>
                <div className="mx-auto px-10 md:px-20 p-2 mb-12 max-w-5xl">
                    <FrontpageSponsorLayout sponsors={sponsors.sponsors} />
                </div>
            </div>
        </main>
    )
}
