import React from 'react'

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
        <div>
            <h2 className="md:text-center text-3xl pt-8 pb-10">Competitions</h2>
            {competitions.map((competition, index) => (
                <div key={index} className="max-w-full pb-10">
                    <h3 className="text-lg font-bold pb-2">
                        {competition.fields?.competition}{' '}
                        {competition.fields?.location && (
                            <p className="inline-block font-normal">
                                in {competition.fields.location}
                            </p>
                        )}
                    </h3>

                    {competition.fields?.description && (
                        <p className="pb-4 pt-2">
                            {competition.fields.description}
                        </p>
                    )}
                    {competition.fields.teamPhoto?.fields?.file?.url && (
                        <img
                            src={competition.fields.teamPhoto.fields.file.url}
                            alt={`${competition.fields.competition} celebration image`}
                        />
                    )}
                    {competition.fields?.startDate &&
                        competition.fields?.endDate && (
                            <p className="pt-2 pb-4 text-sm">
                                {formatDate(competition.fields.startDate)} -{' '}
                                {formatDate(competition.fields.endDate)}
                            </p>
                        )}
                </div>
            ))}
        </div>
    )
}

export default Competitions
