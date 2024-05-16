'use client'
export default function ErrorBoundary({ error }: { error: Error }) {
    return (
        <div className="h-[100vh] flex items-center justify-center">
            <h1 className="text-3xl">Error {error.message}</h1>
        </div>
    )
}
