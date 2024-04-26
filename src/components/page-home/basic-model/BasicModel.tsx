'use client'
import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
    useGLTF,
    OrbitControls,
    PerspectiveCamera,
    Environment
} from '@react-three/drei'

interface Prop {
    prop: string
}

export const Model = ({ prop }: Prop) => {
    const { scene } = useGLTF(prop)

    useFrame(() => {
        scene.rotation.y += 0.0002
    })

    return <primitive object={scene} />
}

const BasicModel = ({ prop }: Prop) => {
    return (
        <div className="flex flex-col mx-auto md:flex-col items-center w-full h-full max-w[2000px]">
            <div className="flex items-center w-full max-w-6xl h-[70%]">
                {prop ? (
                    <Canvas>
                        <spotLight position={[10, 15, 10]} angle={0.3} />
                        <PerspectiveCamera
                            makeDefault
                            position={[10, 24, 50]}
                        />
                        <Suspense fallback={null}>
                            <Model prop={prop} />
                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                            />
                            <Environment preset="sunset" background={false} />
                        </Suspense>
                    </Canvas>
                ) : (
                    <h3 className="text-2xl font-semibold mx-auto">
                        Model Not Found
                    </h3>
                )}
            </div>
        </div>
    )
}

export default BasicModel
