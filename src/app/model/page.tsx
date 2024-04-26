import InteractiveModel from '@/components/page-model/interactive-model/InteractiveModel'
import React from 'react'
import { existsSync } from 'fs'
import { join } from 'path'

const ModelPage = async () => {
    //Check if there is a 3d model
    const filePath = existsSync(
        join(process.cwd(), 'public', '3dmodel', 'model.glb')
    )
        ? '3dmodel/model.glb'
        : ''
    const path = filePath

    return (
        <main className="mt-32">
            <InteractiveModel path={path} />
        </main>
    )
}

export default ModelPage
