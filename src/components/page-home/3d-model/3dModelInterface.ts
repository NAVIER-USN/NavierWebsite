export interface Link {
  sys: {
    type: 'Link'
    linkType: 'Space' | 'Environment' | 'ContentType' | 'Asset'
    id: string
  }
}

export interface Metadata {
  tags: string[]
}

export interface Sys {
  space: Link
  id: string
  type: 'Entry'
  createdAt: string
  updatedAt: string
  environment: Link
  revision: number
  contentType: Link
  locale: string
}

export interface Fields {
  modelName: string
  modelFile: Link
  modelDescription: string
}

export interface CustomDataType {
  metadata: Metadata
  sys: Sys
  fields: Fields
}

export interface AssetSys {
  space: Link
  id: string
  type: 'Asset'
  createdAt: string
  updatedAt: string
  environment: Link
  revision: number
  locale: string
}

export interface AssetMetadata {
  tags: any[]
}

export interface FileDetails {
  size: number
}

export interface File {
  url: string
  details: FileDetails
  fileName: string
  contentType: string
}

export interface AssetFields {
  title: string
  description: string
  file: File
}

export interface Asset {
  metadata: AssetMetadata
  sys: AssetSys
  fields: AssetFields
}
