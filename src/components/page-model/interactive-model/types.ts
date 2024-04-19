export interface CustomProperty {
    meshName: string
    key: string
    value: string
    object: THREE.Object3D
}

export interface ModelProps {
    onCustomProperties: (properties: CustomProperty[]) => void
    setScene: React.Dispatch<React.SetStateAction<THREE.Scene | null>>
}
