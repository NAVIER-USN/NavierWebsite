'use client'
import React, { Suspense, useRef, useState, useEffect } from 'react'
import {
  Canvas,
  useLoader,
  useFrame,
  ThreeEvent,
  ThreeElements,
  useThree
} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { Environment, OrbitControls } from '@react-three/drei'
import { Mesh, MeshStandardMaterial, Color } from 'three'

///////////////////////////////////////////////////////////////////////////////////////
interface ModelProps {
  modelUrl: string
  position: [number, number, number]
}

const Model: React.FC<ModelProps> = ({ modelUrl, position }) => {
  const gltf = useLoader(GLTFLoader, modelUrl)
  const [hoveredMesh, setHoveredMesh] = useState<Mesh | null>(null)

  const currentlyHoveredRef = useRef<Mesh | null>(null)

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    const mesh = e.object as Mesh
    // Reset previous hovered mesh's emissive properties
    if (
      currentlyHoveredRef.current &&
      currentlyHoveredRef.current.material instanceof MeshStandardMaterial
    ) {
      currentlyHoveredRef.current.material.emissiveIntensity = 0
      currentlyHoveredRef.current.material.emissive = new Color(0x000000)
    }
    // Set new hovered mesh and its emissive properties
    currentlyHoveredRef.current = mesh
    if (mesh.material instanceof MeshStandardMaterial) {
      mesh.material.emissiveIntensity = 1
      mesh.material.emissive = new Color(0xffffff)
    }
  }

  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    const mesh = e.object as Mesh
    if (mesh.material instanceof MeshStandardMaterial) {
      mesh.material.emissiveIntensity = 0
      mesh.material.emissive = new Color(0x000000)
    }
    // Clear the ref if the pointer is out
    if (currentlyHoveredRef.current === mesh) {
      currentlyHoveredRef.current = null
    }
  }

  return (
    <group position={position}>
      {gltf.scene.children.map((child, index) => {
        if (
          child instanceof Mesh &&
          child.material instanceof MeshStandardMaterial
        ) {
          // Ensure each mesh uses a unique material instance
          const material = child.material.clone()
          return (
            <mesh
              key={index}
              geometry={child.geometry}
              material={material}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            />
          )
        }
        return null
      })}
    </group>
  )
}

export default function ModelRendererClient({
  modelUrl
}: {
  modelUrl: string
}) {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Suspense fallback={null}>
        <Model modelUrl={modelUrl} position={[0, 0, 0]} />
        <OrbitControls />
        <Environment preset="sunset" background={false} />
      </Suspense>
    </Canvas>
  )
}

/*
'use client'
import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useLoader, useFrame, ThreeEvent } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { OrbitControls } from '@react-three/drei'
import { Mesh, MeshStandardMaterial } from 'three'

interface ModelProps {
  modelUrl: string
}

function Model({ modelUrl }: ModelProps) {
  const gltf = useLoader(GLTFLoader, modelUrl)
  const originalColors = useRef(new Map()).current

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation()
    const mesh = event.object as Mesh
    if (mesh.material && mesh.material instanceof MeshStandardMaterial) {
      if (!originalColors.has(mesh)) {
        originalColors.set(mesh, mesh.material.color.clone())
      }
      mesh.material.color.set('hotpink')
    }
  }

  const handlePointerOut = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation()
    const mesh = event.object as Mesh
    if (mesh.material && mesh.material instanceof MeshStandardMaterial) {
      const originalColor = originalColors.get(mesh)
      if (originalColor) {
        mesh.material.color.copy(originalColor)
      }
    }
  }

  return (
    <primitive
      object={gltf.scene}
      scale={5}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  )
}

interface ModelRendererClientProps {
  modelUrl: string
}

export default function ModelRendererClient({
  modelUrl
}: ModelRendererClientProps) {
  return (
    <Canvas camera={{ position: [10, 0, 0], fov: 50 }}>
      <OrbitControls />
      <directionalLight position={[0, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <pointLight position={[10, 10, 10]} />
        <Model modelUrl={modelUrl} />
      </Suspense>
    </Canvas>
  )
}

*/
