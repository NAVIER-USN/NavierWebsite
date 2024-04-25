'use client'

import React, {
    useRef,
    useState,
    useEffect,
    Suspense,
    useCallback
} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
    useGLTF,
    OrbitControls,
    PerspectiveCamera,
    Environment
} from '@react-three/drei'
import * as THREE from 'three'
import { CustomProperty, ModelProps } from './types'

useGLTF.preload('/3dmodel/model.glb')

const Model: React.FC<ModelProps> = React.memo(
    ({ onCustomProperties, setScene }) => {
        const { scene } = useGLTF('/3dmodel/model.glb') as any

        useFrame(() => {
            scene.rotation.y += 0.00005
        })

        useEffect(() => {
            setScene(scene)
            const properties: CustomProperty[] = []
            scene.traverse((object: THREE.Object3D) => {
                if (
                    object instanceof THREE.Mesh &&
                    object.userData &&
                    Object.keys(object.userData).length
                ) {
                    Object.entries(object.userData).forEach(([key, value]) => {
                        if (
                            key !== 'name' &&
                            typeof value === 'string' &&
                            value.trim() !== ''
                        ) {
                            properties.push({
                                meshName: object.name,
                                key,
                                value,
                                object
                            })
                        }
                    })
                }
            })
            onCustomProperties(properties)
        }, [scene, onCustomProperties, setScene])

        return <primitive object={scene} />
    }
)

Model.displayName = 'Model'

const InteractiveModel = () => {
    const [customProperties, setCustomProperties] = useState<CustomProperty[]>(
        []
    )
    const [openItem, setOpenItem] = useState<string | null>(null)
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
    const [scene, setScene] = useState<THREE.Scene | null>(null)
    const [selectedPropertyName, setSelectedPropertyName] = useState<
        string | null
    >(null)
    const [selectedPropertyValue, setSelectedPropertyValue] = useState<
        string | null
    >(null)

    //Fetch default property data
    const [defaultPropertyName, setDefaultPropertyName] = useState<
        string | null
    >('Navier')
    const [defaultPropertyValue, setDefaultPropertyValue] = useState<
        string | null
    >(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    )
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const dragStartX = useRef<number>(0)
    const scrollStartX = useRef<number>(0)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [isMobile, setIsMobile] = useState<boolean>(false)

    const handleCustomProperties = useCallback(
        (properties: CustomProperty[]) => {
            setCustomProperties(properties)
        },
        []
    )

    useEffect(() => {
        setSelectedPropertyName(defaultPropertyName)
        setSelectedPropertyValue(defaultPropertyValue)
    }, [])

    useEffect(() => {
        if (scene) {
            resetMeshColors(scene)
        }
    }, [scene])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const resetMeshColors = (
        scene: THREE.Scene,
        newColorMeshName?: string,
        newColor: string = 'red'
    ) => {
        scene.traverse((object) => {
            if (object instanceof THREE.Mesh) {
                object.material = new THREE.MeshStandardMaterial({
                    color: 'white',
                    transparent: true,
                    opacity: 1,
                    depthWrite: true
                })
                object.renderOrder = 0
            }
        })

        if (newColorMeshName) {
            scene.traverse((object) => {
                if (
                    object instanceof THREE.Mesh &&
                    object.name !== newColorMeshName
                ) {
                    object.material.opacity = 0.2
                    object.material.depthWrite = false
                    object.renderOrder = 1
                }
            })

            const selectedMesh = scene.getObjectByName(newColorMeshName)
            if (selectedMesh instanceof THREE.Mesh) {
                selectedMesh.material.color.set(newColor)
                selectedMesh.material.opacity = 1
                selectedMesh.renderOrder = 2
            }
        }
    }

    const requestOpen = (meshName: string, key: string, value: string) => {
        const identifier = `${meshName}-${key}`
        setSelectedPropertyName(key)
        setSelectedPropertyValue(value)
        if (openItem === identifier) {
            setOpenItem(null)
            setSelectedPropertyName(defaultPropertyName)
            setSelectedPropertyValue(defaultPropertyValue)

            if (scene !== null) {
                resetMeshColors(scene)
            }
        } else {
            setOpenItem(identifier)
            if (scene !== null) {
                resetMeshColors(scene, meshName, 'red')
            }
        }
    }
    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true)
        dragStartX.current = e.clientX
        scrollStartX.current = containerRef.current?.scrollLeft || 0
    }

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return
        const dragAmount = dragStartX.current - e.clientX
        if (containerRef.current) {
            containerRef.current.scrollLeft = scrollStartX.current + dragAmount
        }
    }

    const onMouseUp = () => {
        setIsDragging(false)
    }

    return (
        <div className="flex flex-col mx-auto md:flex-col items-center w-full h-full pb-12">
            <div className="flex items-center md:w-full w-full h-[50vh] md:h-[70vh]">
                {scene ? (
                    <Canvas>
                        <spotLight position={[10, 15, 10]} angle={0.3} />
                        <PerspectiveCamera
                            ref={cameraRef}
                            makeDefault
                            position={[40, 18, 50]}
                        />
                        <Suspense fallback={null}>
                            <Model
                                onCustomProperties={handleCustomProperties}
                                setScene={setScene}
                            />

                            <OrbitControls enablePan={false} />
                            <Environment preset="sunset" background={false} />
                        </Suspense>
                    </Canvas>
                ) : (
                    <h3 className="text-2xl font-semibold mx-auto">
                        404 Model Not Found
                    </h3>
                )}
                {scene ? (
                    <div className="absolute right-0 max-w-[300px] max-h-[300px] hidden px-4 mr-8 py-3 md:block overflow-auto custom-scrollbar bg-foreground-light dark:bg-foreground-dark shadow-lg">
                        <h3 className="text-2xl">{selectedPropertyName}</h3>
                        <p className="pt-2">{selectedPropertyValue}</p>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <div
                ref={containerRef}
                className="flex flex-col md:flex-row w-full max-w-4xl gap-2 md:gap-5 overflow-auto max-h-full custom-scrollbar select-none rounded-md"
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
            >
                {customProperties.map((prop, index) => (
                    <div
                        key={`${prop.meshName}-${prop.key}`}
                        className="w-full"
                    >
                        <div
                            onClick={() =>
                                requestOpen(prop.meshName, prop.key, prop.value)
                            }
                            className="flex flex-col cursor-pointer p-3 md:mb-4 bg-foreground-light dark:bg-foreground-dark rounded-md shadow-lg"
                        >
                            <p className="truncate text-xl">{prop.key}</p>
                            {openItem === `${prop.meshName}-${prop.key}` && (
                                <div className="block md:hidden pt-4 bg-foreground-light dark:bg-foreground-dark rounded-md">
                                    <p>{prop.value}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InteractiveModel
