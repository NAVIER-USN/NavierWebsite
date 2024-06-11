async function GetRegularData(url: string) {
    try {
        const res = await fetch(url, {
            next: { revalidate: 60 }
        })

        if (!res.ok) {
            console.error(`HTTP error! status: ${res.status}`)
            return {
                status: res.status,
                error: `HTTP error! status: ${res.status}`
            }
        }

        const data = await res.json()

        if (data && data.data) {
            return {
                status: res.status,
                data: data.data
            }
        } else {
            console.error('Data is empty or invalid')
            return { status: res.status, error: 'Data is empty or invalid' }
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error fetching ${url}:`, error)
            return {
                status: 500,
                error: `Error fetching ${url}: ${error.message}`
            }
        } else {
            console.error(`Unexpected error fetching ${url}`)
            return { status: 500, error: `Unexpected error fetching ${url}` }
        }
    }
}

export default GetRegularData
