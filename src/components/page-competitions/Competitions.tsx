import React from 'react'
import {FiMapPin, FiCalendar, FiLink, FiChevronRight, FiAward, FiVideo, FiFileText } from 'react-icons/fi'

const Competitions = ({ competitions }: CompetitionsProps) => {
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }
        return new Date(dateString).toLocaleDateString('en-GB', options)
    }

    return (
        <div className="space-y-8 max-w-7xl mx-auto w-full">
            <h2 className="text-4xl font-bold text-left tracking-tight">Competitions</h2>

            {competitions.map((competition, index) => (
                <div key={index} className="group border border-opacity-40 rounded-xl backdrop-blur-sm hover:border-opacity-60 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="text-3xl font-bold tracking-tight">
                                    {competition.fields?.competition}
                                </h3>
                                {competition.fields?.place && (
                                    <div className={`flex items-center gap-2 border rounded-full px-3 py-1 ${
                                        competition.fields.place === '1st' ? 'border-amber-400 text-amber-600' :
                                        competition.fields.place === '2nd' ? 'border-gray-400 text-gray-600' :
                                        competition.fields.place === '3rd' ? 'border-orange-400 text-orange-600' :
                                        'border-blue-400 text-blue-600'
                                    }`}>
                                        <FiAward className="w-4 h-4" />
                                        <span className="text-sm font-medium">{competition.fields.place}</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-3 text-sm opacity-80">
                                {competition.fields?.location && (
                                    <div className="flex items-center gap-2">
                                        <FiMapPin className="w-3.5 h-3.5" />
                                        <span>{competition.fields.location}</span>
                                    </div>
                                )}

                                {competition.fields?.startDate && competition.fields?.endDate && (
                                    <div className="flex items-center gap-2">
                                        <FiCalendar className="w-3.5 h-3.5" />
                                        <span>{formatDate(competition.fields.startDate)} - {formatDate(competition.fields.endDate)}</span>
                                    </div>
                                )}
                            </div>

                            {competition.fields?.description && (
                                <p className="text-sm leading-relaxed opacity-75 ">
                                    {competition.fields.description}
                                </p>
                            )}

                            {competition.fields?.competitionLink && (
                                <a 
                                    href={competition.fields.competitionLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all duration-300"
                                >
                                    <FiLink className="w-4 h-4" />
                                    <span>Competition Details</span>
                                    <FiChevronRight className="w-4 h-4" />
                                </a>
                            )}

                            {competition.fields?.technicalReportLink?.fields?.file?.url && (
                                <a 
                                    href={competition.fields.technicalReportLink.fields.file.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all duration-300"
                                >
                                    <FiFileText className="w-4 h-4" />
                                    <span>Technical Report</span>
                                    <FiChevronRight className="w-4 h-4" />
                                </a>
                            )}

                            {competition.fields?.teamVideoLink && (
                                <a 
                                    href={competition.fields.teamVideoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all duration-300"
                                >
                                    <FiVideo className="w-4 h-4" />
                                    <span>Team Video</span>
                                    <FiChevronRight className="w-4 h-4" />
                                </a>
                            )}
                        </div>

                        {competition.fields.teamPhoto?.fields?.file?.url && (
                            <div className="relative h-full min-h-[200px] md:min-h-0">
                                <div className="absolute inset-0">
                                    <img
                                        loading="lazy"
                                        src={competition.fields.teamPhoto.fields.file.url}
                                        alt={`${competition.fields.competition} celebration`}
                                        className="w-full h-full object-cover rounded-r-xl"
                                    />
                                    {competition.fields.competitionLogo?.fields?.file?.url && (
                                        <div className="absolute bottom-2 right-2 backdrop-blur-md px-3 py-2 rounded-lg">
                                            <img 
                                                loading="lazy"
                                                src={competition.fields.competitionLogo.fields.file.url}
                                                alt={`${competition.fields.competition} logo`}
                                                className="w-12 h-12 object-contain"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Competitions