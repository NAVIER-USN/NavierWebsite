import React from 'react'

const Competitions = ({ competitions }: any) => {
    console.log(competitions[0].fields.teamPhoto)

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
            <h2 className="text-center text-2xl pt-8">Competitions</h2>
            {competitions.map((competition: any, index: number) => (
                <div key={index} className="max-w-full py-5">
                    <h3 className="text-lg font-bold pb-3">
                        {competition.fields?.competition}
                    </h3>
                    {competition.fields?.location && (
                        <p className="pb-2">
                            Location: {competition.fields.location}
                        </p>
                    )}
                    {competition.fields?.description && (
                        <p className="pb-2">{competition.fields.description}</p>
                    )}
                    {competition.fields.teamPhoto?.fields?.file?.url && (
                        <img
                            className=""
                            src={competition.fields.teamPhoto.fields.file.url}
                            alt={`${competition.fields.competition} celebration image`}
                        />
                    )}
                    {competition.fields?.startDate &&
                        competition.fields?.endDate && (
                            <p className="py-3">
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
