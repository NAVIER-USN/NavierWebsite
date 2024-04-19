async function GetRegularData(url: string) {
    try {
        const res = await fetch(url)

        return res.json()
    } catch (error) {
        console.error('Error fetching logos:', error)
        throw error
    }
}

export default GetRegularData
