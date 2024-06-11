import Link from 'next/link'
import React from 'react'
import { Props } from './types'

const Hero = ({ props }: Props) => {
    return (
        <div className="relative min-w-full h-[100vh] lg:max-h-none overflow-hidden">
            {props.file.url && (
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover select-none"
                    loop
                    autoPlay
                    muted
                >
                    <source src={props.file.url} type="video/mp4" />
                </video>
            )}

            <div className="absolute inset-0">
                <div className="bg-background-dark bg-opacity-70 w-full h-full flex justify-center flex-col">
                    <h2 className="text-bold text-center text-2xl md:text-4xl text-white px-12 md:px-0">
                        Todays students, tomorrows solutions
                    </h2>
                    <p className="text-bold text-center text:lg md:text-xl text-white my-4 px-6 md:px-0">
                        {`We are always looking for new talent to elevate Navier
                        to the next level!`}
                        <br />
                        {`
                        If you feel like taking on a challenge, don't hesitate
                        to apply!`}
                    </p>
                    <Link
                        href="/join"
                        className="text-text-dark dark:text-text-light mx-auto"
                    >
                        <button
                            aria-label="Join us"
                            className="select-none mb-20 rounded-2xl mt-4 md:px-8 py-2 px-3 text-xl md:text-3xl bg-button-light dark:bg-button-dark transition duration-200 text-white hover:underline shadow-lg"
                        >
                            APPLY
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
