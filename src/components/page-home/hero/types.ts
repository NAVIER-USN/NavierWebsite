export interface Props {
    props: {
        title: string
        file: {
            url: string
            details: { size: number }
            fileName: string
            contentType: string
        }
    }
}
