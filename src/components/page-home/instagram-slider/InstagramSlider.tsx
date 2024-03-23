'use client'

import Image from 'next/image'
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

type InstagramSlides = {
    id: string
    caption: string
    media_url: string
    timestamp: string
    media_type: string
    permalink: string
}
type InstagramProps = {
    instagramProps: InstagramSlides[]
}

const InstagramSlider = ({ instagramProps }: InstagramProps) => {
    return (
        <section className="max-w-full py-5">
            <div className="container">
                <Swiper
                    navigation
                    pagination={{ type: 'bullets' }}
                    modules={[FreeMode, Pagination]}
                    className="rounded-lg h-[70vh] md:h-[40vh] lg:h-[45vh] xl:h-[50vh]"
                    initialSlide={0}
                    centeredSlides={true}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            centeredSlides: false
                        },

                        768: {
                            slidesPerView: 2,
                            centeredSlides: true
                        }
                    }}
                >
                    {instagramProps.map(
                        (item: InstagramSlides, index: number) => (
                            <SwiperSlide
                                className="flex justify-center items-center gap-6 group relative px-6 py-8 cursor-pointer h-full"
                                key={item.id}
                            >
                                <Image
                                    unoptimized
                                    src={item.media_url}
                                    alt={item.caption}
                                    priority={true}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </div>
        </section>
    )
}

export default InstagramSlider
