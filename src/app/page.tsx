import ModelRendererClient from '@/components/3d-model/3dModel'
import { CustomDataType } from '@/components/3d-model/3dModelInterface'
import { Asset } from 'contentful'

const homePageEntryUrl = `${process.env.BASE_URL!}/spaces/${process.env
  .SPACE_ID!}/environments/${process.env.ENVIRONMENT}/entries/${process.env
  .HOME_PAGE_ENTRY!}?access_token=${process.env.ACCESS_TOKEN!}`

const HomePage = async () => {
  // Fetch 3d model entry
  const modelEntryUrl = `${process.env.BASE_URL}/spaces/${process.env.SPACE_ID}/environments/${process.env.ENVIRONMENT}/entries/${process.env.MODEL_ENTRY}?access_token=${process.env.ACCESS_TOKEN}`
  const entryResponse = await fetch(modelEntryUrl, {
    headers: {
      'Cache-Control': 'no-cache'
    }
  })
  const entryData = (await entryResponse.json()) as CustomDataType
  const fileId = entryData.fields.modelFile.sys.id

  // Fetch file data and file url
  const modelFileUrl = `${process.env.BASE_URL}/spaces/${process.env.SPACE_ID}/environments/${process.env.ENVIRONMENT}/assets/${fileId}?access_token=${process.env.ACCESS_TOKEN}`
  const fileResponse = await fetch(modelFileUrl)
  const fileData = (await fileResponse.json()) as Asset

  if (fileData.fields.file) {
    const modelUrl = fileData.fields.file.url as string
    return (
      <main className="flex justify-center items-center h-full w-full">
        <div className="flex justify-center items-center h-full w-full">
          {modelUrl && <ModelRendererClient modelUrl={modelUrl} />}
        </div>
      </main>
    )
  } else {
    console.error('File field is undefined')
  }
}

export default HomePage
