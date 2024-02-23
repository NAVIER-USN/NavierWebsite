import ModelRendererClient from '@/components/3d-model/3dModel'
import { fetchAsset, fetchEntry } from '../../services/contentfulService'

const HomePage = async () => {
    let modelUrl = ''
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
        <main className="flex justify-center items-center h-full w-full">
            <div className="flex justify-center items-center h-full w-full">
                {modelUrl && <ModelRendererClient modelUrl={modelUrl} />}
            </div>
        </main>
    )
}
export default HomePage
