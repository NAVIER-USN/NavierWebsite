'use client'
import React, { Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
    useGLTF,
    OrbitControls,
    PerspectiveCamera,
    Environment
} from '@react-three/drei'

export const Model = () => {
    const { scene } = useGLTF('/3dmodel/model.glb')

    useFrame(() => {
        scene.rotation.y += 0.0002
    })

    return <primitive object={scene} />
}

const BasicModel = () => {
    return (
        <div className="flex flex-col mx-auto md:flex-col items-center w-full h-full max-w[2000px]">
            <div className="flex items-center w-full md:w-[80vw] max-w-6xl h-3/4">
                <Canvas>
                    <spotLight position={[10, 15, 10]} angle={0.3} />
                    <PerspectiveCamera makeDefault position={[10, 24, 50]} />
                    <Suspense fallback={null}>
                        <Model />
                        <OrbitControls enableZoom={false} enablePan={false} />
                        <Environment preset="sunset" background={false} />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}

export default BasicModel
