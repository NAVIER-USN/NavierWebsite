import InteractiveModel from '@/components/page-technical/interactive-model/InteractiveModel'
import React from 'react'
import { existsSync } from 'fs'
import { join } from 'path'

export const generateMetadata = () => {
    return {
        title: `Technical`
    }
}

const ModelPage = async () => {
    //Check if there is a 3d model
    const filePath = existsSync(
        join(process.cwd(), 'public', '3dmodel', 'model.glb')
    )
        ? '3dmodel/model.glb'
        : ''
    const path = filePath

    return (
        <main className="mt-32 px-3 max-w-full">
            <InteractiveModel path={path} />
        </main>
    )
}

export default ModelPage
