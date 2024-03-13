import {
    CustomDataType,
    Asset
} from '@/components/home-page/3d-model/3dModelInterface'
import { MemberProfile, MembersPage } from '@/types/contentful'

const BASE_URL = process.env.BASE_URL!
const ACCESS_TOKEN = process.env.ACCESS_TOKEN!
const SPACE_ID = process.env.SPACE_ID!
const ENVIRONMENT = process.env.ENVIRONMENT!

// Generic fetch function for any entry by ID
async function fetchEntry(entryId: string): Promise<CustomDataType> {
    const url = `${BASE_URL}/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries/${entryId}?access_token=${ACCESS_TOKEN}`
    const response = await fetch(url, {
        headers: { 'Cache-Control': 'no-cache' }
    })
    const data = (await response.json()) as CustomDataType
    return data
}

// Generic fetch function for any asset by ID
async function fetchAsset(fileId: string): Promise<Asset> {
    const url = `${BASE_URL}/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/assets/${fileId}?access_token=${ACCESS_TOKEN}`
    const response = await fetch(url)
    const data = (await response.json()) as Asset
    return data
}

async function fetchMembersPage(): Promise<MembersPage> {
    // Construct the URL for fetching the MembersPage entry
    const membersPageUrl = `${process.env.CONTENTFUL_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries/${process.env.CONTENTFUL_MEMBERS_PAGE_ID}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`

    const response = await fetch(membersPageUrl)
    const data = await response.json()
    return data // Contains references to member entries
}

async function fetchMemberProfiles(
    memberIds: string[]
): Promise<MemberProfile[]> {
    const memberProfiles = await Promise.all(
        memberIds.map(async (id) => {
            const memberUrl = `${process.env.CONTENTFUL_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries/${id}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`

            const response = await fetch(memberUrl)
            const data = await response.json()
            return data // The member entry data
        })
    )

    return memberProfiles
}

async function fetchMemberPhotos(photoAssetIds: string[]): Promise<Asset[]> {
    const photoAssets = await Promise.all(
        photoAssetIds.map(async (id) => {
            const photoUrl = `${process.env.CONTENTFUL_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/assets/${id}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`

            const response = await fetch(photoUrl)
            const data = await response.json()
            return data // The photo asset data
        })
    )

    return photoAssets
}

// Fetch entries by content type
async function fetchEntriesByContentType<T>(contentType: string): Promise<T[]> {
    const url = `${BASE_URL}/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries?access_token=${ACCESS_TOKEN}&content_type=${contentType}`
    const response = await fetch(url, {
        headers: { 'Cache-Control': 'no-cache' }
    })
    const { items } = (await response.json()) as { items: T[] }
    return items
}

export {
    fetchEntry,
    fetchAsset,
    fetchMemberProfiles,
    fetchMemberPhotos,
    fetchEntriesByContentType
}
