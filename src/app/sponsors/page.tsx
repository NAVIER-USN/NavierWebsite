import React from 'react'
import Image from 'next/image'
import { client } from '../../../lib/contentful/client'

const SponsorsPage = async () => {
    /*
	
	let sponsors = []

	//Fetching sponsors
	try {
		const response = await client.getEntries({ content_type: 'sponsorPage' })
		sponsors = response.items
	} catch (error) {
		console.error('Error fetching logos:', error)
		throw error
	}
	
	return (
		<div>
		{sponsors[0].fields.sponsor.map((sponsor, index) => {
			return (
				<div key={index}>
				{sponsor.fields.photo.fields.file.url && (
					<Image
					alt={`${sponsor.fields.name}'s picture`}
					src={`https:${sponsor.fields.photo.fields.file.url}`}
					width={150}
					height={100}
					/>
					)}
					<h3>{sponsor.fields.name}</h3>
					</div>
					)
				})}
				</div>
				)
		*/
}

export default SponsorsPage
