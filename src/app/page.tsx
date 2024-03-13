import ModelRendererClient from '@/components/page-home/3d-model/3dModel'
import { fetchAsset, fetchEntry } from '../../services/contentfulService'

const HomePage = async () => {
    let modelUrl = ''

    //Fetching 3d model
    try {
        const entryData = await fetchEntry(process.env.MODEL_ENTRY!)
        const fileId = entryData.fields.modelFile.sys.id
        const fileData = await fetchAsset(fileId)

        if (fileData && fileData.fields.file) {
            modelUrl = fileData.fields.file.url
        } else {
            console.error('File field is undefined')
            return <div>Error loading model</div>
        }
    } catch (error) {
        console.error('Error fetching data:', error)
        return <div>Error loading page</div>
    }
    return (
        <main className="flex justify-center items-center h-screen w-screen">
            <div className="flex justify-center items-center h-full w-full">
                <div style={{ height: '80vh', width: '80vw' }}>
                    {modelUrl && <ModelRendererClient modelUrl={modelUrl} />}
                </div>
            </div>
        </main>
    )
}
export default HomePage
