import Link from 'next/link'
import React from 'react'

type Props = {
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

const Hero = ({ props }: Props) => {
    return (
        <div className="relative min-w-full h-[850px] max-h-[80vh] lg:max-h-none overflow-hidden">
            {props.file.url && (
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    loop
                    autoPlay
                    muted
                >
                    <source src={props.file.url} type="video/mp4" />
                </video>
            )}

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                    <p className="text-bold text-2xl text-white">
                        Todays students, tomorrows solutions
                    </p>
                    <Link
                        href="/join"
                        className="text-text-dark dark:text-text-light"
                    >
                        <button
                            aria-label="Join us"
                            className="mt-4 px-10 py-2 text-xl bg-button-light dark:bg-button-dark transition duration-200 text-white hover:underline shadow-lg"
                        >
                            Join
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
