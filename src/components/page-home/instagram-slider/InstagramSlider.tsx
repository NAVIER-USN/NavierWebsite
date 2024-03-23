'use client'

import Image from 'next/image'
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

type instagramProps = {
    instagramProps: any
}

const InstagramSlider = ({ instagramProps }: instagramProps) => {
    return (
        <section className="max-w-full py-5">
            <div className="container">
                <Swiper
                    navigation
                    pagination={{ type: 'bullets' }}
                    modules={[FreeMode, Pagination]}
                    className="rounded-lg"
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
                    {instagramProps.map((item: any, index: number) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex flex-col justify-center items-center gap-6 group relative px-6 py-8 cursor-pointer">
                                <Image
                                    src={item.media_url}
                                    alt={item.caption}
                                    priority={true}
                                    width={1000}
                                    height={1000}
                                    className="block w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default InstagramSlider
/*
 
        <section className="sm:p-12">
            <div className="container">
                <Swiper
                    navigation
                    pagination={{ type: 'bullets' }}
                    modules={[FreeMode, Pagination]}
                    className="rounded-lg"
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
                    {instagramProps.map((item: any, index: number) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex flex-col justify-center items-center gap-6 group relative px-6 py-8 h-full w-full cursor-pointer">
                                <Image
                                    src={item.media_url}
                                    alt={item.caption}
                                    priority={true}
                                    width={1000}
                                    height={1000}
                                    className="block w-auto h-full object-cover max-h-[520px] rounded-xl"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

*/
