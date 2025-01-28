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
import { CustomProperty, InteractiveModelInterface, ModelProps } from './types'

// Model component responsible for loading and displaying the 3D model
const Model: React.FC<ModelProps> = React.memo(
    ({ onCustomProperties, setScene, path }) => {
        const { scene } = useGLTF(path) as any

        // Rotate the model slightly on each frame
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

// InteractiveModel component for rendering the 3D model and handling interactions
const InteractiveModel = ({ path }: InteractiveModelInterface) => {
    const defaultPropertyName = 'Triton'
    const defaultPropertyValue =
        'After many months of hard work, we are proud to present our latest model: Triton. Created by a dedicated team of students at USN, Triton is an autonomous boat designed for the Autodrone competition. While the hull is still under construction, the core components have been thoroughly developed and tested on another boat. This project has significantly enhanced our technical skills and fostered a spirit of collaboration and problem-solving. Triton represents our commitment to pushing the boundaries of autonomous maritime technology.'

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
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const dragStartX = useRef<number>(0)
    const scrollStartX = useRef<number>(0)
    const containerRef = useRef<HTMLDivElement | null>(null)

    // Callback to handle custom properties from the model
    const handleCustomProperties = useCallback(
        (properties: CustomProperty[]) => {
            setCustomProperties(properties)
        },
        []
    )

    // Set default selected properties on component mount
    useEffect(() => {
        setSelectedPropertyName(defaultPropertyName)
        setSelectedPropertyValue(defaultPropertyValue)
    }, [])

    // Reset mesh colors when the scene changes
    useEffect(() => {
        if (scene) {
            resetMeshColors(scene)
        }
    }, [scene])

    // Function to reset mesh colors and highlight a selected mesh
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
                selectedMesh.material.opacity = 0.7
                selectedMesh.renderOrder = 2
            }
        }
    }

    // Handle opening and closing of property details
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

    // Handle mouse down event for dragging
    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true)
        dragStartX.current = e.clientX
        scrollStartX.current = containerRef.current?.scrollLeft || 0
    }

    // Handle mouse move event for dragging
    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return
        const dragAmount = dragStartX.current - e.clientX
        if (containerRef.current) {
            containerRef.current.scrollLeft = scrollStartX.current + dragAmount
        }
    }

    // Handle mouse up event to stop dragging
    const onMouseUp = () => {
        setIsDragging(false)
    }

    return (
        <div className="container mx-auto px-4 py-4 flex flex-col gap-8">
            <div className="relative w-full aspect-[16/9] bg-black/5 rounded-2xl overflow-hidden">
                {path ? (
                    <>
                        <Canvas className="w-full h-full">
                            <spotLight position={[10, 15, 10]} angle={0.3} />
                            <PerspectiveCamera
                                ref={cameraRef}
                                makeDefault
                                position={[40, 18, 50]}
                            />
                            <Suspense fallback={null}>
                                <Model
                                    path={path}
                                    onCustomProperties={handleCustomProperties}
                                    setScene={setScene}
                                />
                                <OrbitControls enablePan={false} />
                                <Environment preset="sunset" background={false} />
                            </Suspense>
                        </Canvas>
                        
                        <div className="absolute right-6 top-6 w-80 hidden lg:block">
                            <div className="backdrop-blur-xl bg-white/80 dark:bg-gray/80 p-6 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold mb-3 text-gray-600 dark:text-black-900">{selectedPropertyName}</h3>
                                <p className="text-sm leading-relaxed text-gray-600 dark:text-black-900">
                                    {selectedPropertyValue}
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <h3 className="text-2xl font-bold text-gray-400">Model Not Found</h3>
                    </div>
                )}
            </div>
    
            <div
                ref={containerRef}
                className="flex gap-4 pb-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
            >
                {customProperties.map((prop) => (
                    <div
                        key={`${prop.meshName}-${prop.key}`}
                        className="snap-start shrink-0"
                    >
                        <button
                            ref={(el) => {
                                if (el && openItem === `${prop.meshName}-${prop.key}`) {
                                    el.scrollIntoView({ 
                                        behavior: 'smooth', 
                                        block: 'nearest',
                                        inline: 'center'
                                    });
                                }
                            }}
                            onClick={() => requestOpen(prop.meshName, prop.key, prop.value)}
                            className={`
                                w-72 p-6 rounded-xl transition-all
                                ${openItem === `${prop.meshName}-${prop.key}`
                                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/25'
                                    : 'bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
                                }
                            `}
                        >
                            <h4 className="text-lg font-semibold mb-2">{prop.key}</h4>
                            {openItem === `${prop.meshName}-${prop.key}` && (
                                <p className="text-sm lg:hidden opacity-90">
                                    {prop.value}
                                </p>
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InteractiveModel
