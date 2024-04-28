async function GetRegularData(url: string) {
    try {
        const response = await fetch(url)

        const data = await response.json()

        return {
            data,
            revalidate: 60
        }
    } catch (error) {
        console.error(`Error fetching ${url}:`, error)
        throw error
    }
}

export default GetRegularData
