import Link from 'next/link'
import React from 'react'
import { Props } from './types'

const Hero = ({ props }: Props) => {
  return (
    <div className="bg-gray-50">
      <div className="relative min-w-full h-[50vh] overflow-hidden">
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
          <div className="bg-background-dark bg-opacity-70 w-full h-full">
            <section className="flex justify-start items-end h-[calc(50vh-5rem)]">
              <div className="px-4 w-full max-w-7xl mx-auto sm:px-6 lg:px-8 pb-8 lg:pb-12">
                <div className="max-w-lg lg:max-w-xl">
                  <div className="text-left">
                    <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl font-pj">
                      Today's students, tomorrow's solutions
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-white sm:mt-4 font-inter max-w-md">
                      We are always looking for new talent to elevate Navier to the next level!
                      If you feel like taking on a challenge, don't hesitate to apply!
                    </p>
                    <div className="mt-4 sm:mt-6">
                      <Link href="/join" className="inline-flex">
                        <button
                          aria-label="Join us"
                          className="select-none rounded-lg px-4 py-2 text-sm sm:text-base font-bold text-white transition-all duration-200 bg-gray-900 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        >
                          APPLY NOW
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero