import FrontpageSponsorLayout from '@/components/page-home/sponsor-layout/FrontPageSponsorLayout'
import BasicModel from '@/components/page-home/basic-model/BasicModel'
import Hero from '@/components/page-home/hero/Hero'
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData'
import InstagramSwiper from '@/components/page-home/instagram-swiper/InstagramSwiper'
import GetRegularData from '@/components/getData/get-regular-data/GetRegularData'
import { CiCalendar, CiVideoOn, CiFileOn, CiCircleChevRight, CiMapPin } from "react-icons/ci";

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

    const formatDate = (startDate: string, endDate: string) => {
        const options: Intl.DateTimeFormatOptions = {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }
        const start = new Date(startDate).toLocaleDateString('en-US', options)
        const end = new Date(endDate).toLocaleDateString('en-US', options)
        return `${start} - ${end}`
    }

    return (
        <main>
            <Hero props={home.videoHomepageHero.fields} />

            <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
                <div className="mb-16">
                    <div className="space-y-6">
                          {home.currentCompetitions?.map((competition: Competition, index: number) => (
                            <div key={index} className="flex flex-col sm:flex-row gap-4 sm:items-center sm:space-x-8 py-6 border-b">
                                <div className="flex-grow space-y-2 sm:space-y-0">
                                    <div className="flex items-center gap-2">
                                        <CiCalendar className="w-6 sm:w-8 h-6 sm:h-8" />
                                        <div>
                                            <h4 className="text-lg font-semibold">Current competition: {competition.fields.competition}</h4>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-white text-sm">
                                                <span>{formatDate(competition.fields.startDate || '', competition.fields.endDate || '')}</span>
                                                {competition.fields.location && (
                                                    <>
                                                        <span>•</span>
                                                        <div className="flex items-center gap-1">
                                                            <CiMapPin className="w-4 h-4" />
                                                            <span>{competition.fields.location}</span>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 sm:space-x-6 flex-shrink-0">
                                    {competition.fields.technicalReportLink?.fields?.file?.url && (
                                        <a 
                                            href={competition.fields.technicalReportLink.fields.file.url}
                                            className="flex items-center text-sm hover:underline hover:text-blue-600 transition-colors"
                                        >
                                            <CiFileOn className="w-5 h-5 mr-1" />
                                            Technical Report
                                        </a>
                                    )}
                                    {competition.fields.teamVideoLink && (
                                        <a 
                                            href={competition.fields.teamVideoLink}
                                            className="flex items-center text-sm hover:underline hover:text-blue-600 transition-colors"
                                        >
                                            <CiVideoOn className="w-5 h-5 mr-1" />
                                            Team Video
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="group">
                        <div className="overflow-hidden rounded-lg mb-6">
                            <img
                                src={`https:${home.currentTeamGroupImage.fields.file.url}`}
                                alt={home.currentTeamGroupImage.fields.title}
                                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            The Students
                        </h3>
                        <p className="leading-relaxed mb-6">{home.theStudents}</p>
                        <a href="/teams" className="inline-flex items-center font-medium hover:underline">
                            Meet the team
                            <CiCircleChevRight className="w-5 h-5 ml-1" />
                        </a>
                    </div>

                    <div className="group">
                        <div className="h-[300px] md:h-[400px] lg:h-[500px] mb-6 rounded-lg overflow-hidden">
                            <BasicModel prop={path} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            The Solution
                        </h3>
                        <p className="leading-relaxed mb-6">{home.theSolution}</p>
                        <a href="/technical" className="inline-flex items-center font-medium hover:underline">
                            Learn more about Triton
                            <CiCircleChevRight className="w-5 h-5 ml-1" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-32">
                <div className="max-w-5xl mx-auto">
                    <InstagramSwiper imageProps={instagram.data} />
                </div>
            </div>

            <div className="flex flex-col justify-center pt-20 pb-12">
                <h3 className="text-2xl text-center md:text-4xl font-bold mb-12">
                    Sponsors
                </h3>
                <div className="mx-auto px-10 md:px-20 p-2 mb-12 max-w-5xl">
                    <FrontpageSponsorLayout sponsors={sponsors.sponsors} />
                </div>
            </div>
        </main>
    )
}