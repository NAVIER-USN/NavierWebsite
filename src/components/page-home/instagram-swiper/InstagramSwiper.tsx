'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ImageProps, ImageSwiper } from './types'
import { IoLogoInstagram } from 'react-icons/io'

const InstagramSwiper = ({ imageProps }: ImageProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
    const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const validImageProps = Array.isArray(imageProps) ? imageProps : []
    const filteredImageProps = validImageProps.filter(
        (item: ImageSwiper) =>
            item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM'
    )

    const handleSlideChange = (swiper: SwiperType) => {
        setActiveIndex(swiper.realIndex)
        if (thumbsSwiper && !thumbsSwiper.destroyed) {
            thumbsSwiper.slideTo(swiper.realIndex)
        }
    }

    const handleThumbnailClick = (index: number) => {
        if (mainSwiper && !mainSwiper.destroyed) {
            mainSwiper.slideToLoop(index)
        }
    }

    useEffect(() => {
        if (filteredImageProps.length > 0 && activeIndex >= filteredImageProps.length) {
            setActiveIndex(0)
        }
    }, [filteredImageProps, activeIndex])

    if (filteredImageProps.length === 0) {
        return (
            <div className="flex items-center justify-center h-96 rounded-lg">
                <p className="text-gray-500 dark:text-gray-400">No images available</p>
            </div>
        )
    }

    return (
        <section className="py-8 md:py-12 flex flex-col items-center bg-gray-50 dark:bg-gray-900">
            <div className="container max-w-4xl px-4">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <Swiper
                        loop={true}
                        spaceBetween={0}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="h-[60vh] md:h-[80vh] w-full"
                        onSlideChange={handleSlideChange}
                        onSwiper={setMainSwiper}
                    >
                        {filteredImageProps.map((item: ImageSwiper, index: number) => (
                            <SwiperSlide key={index} className="bg-black">
                                <div className="relative flex h-full w-full items-center justify-center">
                                    <img
                                        src={item.media_url}
                                        alt={item.caption || 'Instagram Image'}
                                        width={1000}
                                        height={1000}
                                        className="block h-full w-full object-contain"
                                    />
                                    <Link
                                        href={item.permalink || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-4 left-4 text-white hover:text-pink-500 transition-colors duration-300"
                                        aria-label="View on Instagram"
                                    >
                                        <IoLogoInstagram size={32} className="drop-shadow-lg" />
                                    </Link>
                                    {item.caption && (
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                            <p className="text-white text-sm md:text-base line-clamp-2">
                                                {item.caption}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Thumbnail Navigation */}
                    <div className="bg-gray-100 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={false}
                            spaceBetween={2}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="h-24 md:h-32 w-full"
                        >
                            {filteredImageProps.map((item: ImageSwiper, index: number) => (
                                <SwiperSlide key={index}>
                                    <button
                                        className="relative flex h-full w-full items-center justify-center overflow-hidden group"
                                        onClick={() => handleThumbnailClick(index)}
                                        aria-label={`View image ${index + 1}`}
                                    >
                                        <img
                                            src={item.media_url}
                                            alt={item.caption || 'Instagram Image'}
                                            width={150}
                                            height={150}
                                            className={`block h-full w-full object-cover transition-all duration-300 ${
                                                activeIndex === index 
                                                    ? 'opacity-100 scale-105' 
                                                    : 'opacity-50 scale-100 group-hover:opacity-75'
                                            }`}
                                        />
                                        {activeIndex === index && (
                                            <div className="absolute inset-0 border-2 border-blue-500"></div>
                                        )}
                                    </button>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InstagramSwiper