import React from 'react';
import GetContentfulData from '@/components/getData/get-contentful-data/GetContentfulData';
import { AboutTypes } from './types';
import { FiArrowRight, FiAnchor, FiUsers, FiGlobe, FiClock, FiTarget } from 'react-icons/fi';

export const generateMetadata = () => {
    return {
        title: 'About'
    }
}

const AboutPage = async () => {
    const aboutUs = await GetContentfulData('aboutUsPage');

    if (!aboutUs) {
        throw new Error('Error loading aboutpage data.');
    }

    return (
        <main>
            <section className="pt-32 pb-20 light:bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Get to know NavierUSN
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            Navier USN is a group of motivated students developing autonomous vehicles for national and international competitions. Backed by a supporting organisation, our students are encouraged to explore new possibilities and develop new ideas. This makes Navier a group for acquiring technical knowledge as well as team-building skills.
                            </p>
                        </div>
                        <div>
                            <img
                                src={`https:${aboutUs.teamGroupPhoto.fields.file.url}`}
                                alt={aboutUs.teamGroupPhoto.fields.title}
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: FiUsers, number: '21', label: 'Team Members' },
                            { icon: FiTarget, number: '4', label: 'Competitions' },
                            { icon: FiClock, number: '3', label: 'Years of Innovation' },
                            { icon: FiGlobe, number: '11', label: 'Sponsors' }
                        ].map((stat, index) => (
                            <div key={index} className="p-6 bg-gray-50 rounded-lg">
                                <stat.icon className="w-8 h-8 text-gray-900 mb-4" />
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                {aboutUs.aboutParagraphRef.map(
                            (purpose: AboutTypes, index: number) => (
                        <div key={index} className="mb-16 last:mb-0">
                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="lg:w-1/4">
                                    <span className="text-6xl font-bold">
                                        {purpose.fields.title}
                                    </span>
                                </div>
                                <div className="lg:w-3/4">
                                    <p className="text-lg ">
                                        {purpose.fields.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                    {aboutUs.purposes.map(
                            (purpose: AboutTypes, index: number) => (
                            <div key={index} 
                                className="bg-white rounded-lg text-dark p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                {purpose.fields.title && (
                                    <h3 className="text-xl text-gray-900 font-semibold mb-2">
                                        {purpose.fields.title}
                                    </h3>
                                )}
                                <p className="text-gray-900">
                                    {purpose.fields.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 relative">
    <div className="max-w-4xl mx-auto px-4">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200" />
        
        <div className="py-6 md:py-16 relative">
            {aboutUs.goals.map((goal: AboutTypes, index: number) => (
                <div 
                    key={index} 
                    className={`flex items-center mb-12 last:mb-0 ${
                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                >
                    <div className={`w-1/2 px-6 ${
                        index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                        <div className="transition-all duration-300 transform hover:scale-105">
                            {goal.fields.title && (
                                <h3 className="text-xl md:text-2xl pb-3 text-gray-900 dark:text-gray-100 font-semibold">
                                    {goal.fields.title}
                                </h3>
                            )}
                            <p className="text-md text-gray-600 dark:text-gray-300">
                                {goal.fields.text}
                            </p>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center w-12">
                        <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center z-10 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                            <FiTarget className="w-6 h-6 text-gray-900 dark:text-gray-100" />
                        </div>
                    </div>

                    <div className="w-1/2 px-6" />
                </div>
            ))}
        </div>
    </div>
</section>

<section className="py-16">
    <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
                Be Part of Navier's Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-white mb-8">
                At Navier, we are driven by passion and innovation, and we invite you to be a part of our journey. Whether you want to contribute to autonomous technology, join a team of management, or connect with us in other ways, we would love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <a href="/join" className="px-6 py-3 bg-white text-gray-900 rounded hover:bg-gray-100 transition-colors">
                    Join Our Team
                    <FiArrowRight className="inline ml-2" />
                </a>
                <a href="/get_in_touch" className="px-6 py-3 border-2 dark:border-white rounded hover:bg-grey text-gray-900 dark:text-white transition-colors">
                    Contact Us
                    <FiArrowRight className="inline ml-2" />
                </a>
            </div>
        </div>
    </div>
</section>

    </main>
    )
}

export default AboutPage;