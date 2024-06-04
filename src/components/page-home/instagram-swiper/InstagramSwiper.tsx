'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ImageProps, ImageSwiper } from './types'

const InstagramSwiper = ({ imageProps }: ImageProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
    const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    // Ensure imageProps is defined and an array
    const validImageProps = Array.isArray(imageProps) ? imageProps : []

    // Filter out unsupported media types
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
        // Reset activeIndex if the filteredImageProps changes to sync with thumbs
        if (
            filteredImageProps.length > 0 &&
            activeIndex >= filteredImageProps.length
        ) {
            setActiveIndex(0)
        }
    }, [filteredImageProps, activeIndex])

    // Return early if filteredImageProps is empty to avoid rendering errors
    if (filteredImageProps.length === 0) {
        return <div>No images available</div>
    }

    return (
        <section className="py-12 flex flex-col items-center">
            <div className="container mb-12">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="h-[60vh] w-full rounded-lg"
                    onSlideChange={handleSlideChange}
                    onSwiper={setMainSwiper}
                >
                    {filteredImageProps.length ? (
                        filteredImageProps.map(
                            (item: ImageSwiper, index: number) => (
                                <SwiperSlide key={index}>
                                    <div className="flex h-full w-full items-center justify-center">
                                        <Image
                                            src={item.media_url}
                                            alt={
                                                item.caption ||
                                                'Instagram Image'
                                            }
                                            width={1000}
                                            height={1000}
                                            priority={true}
                                            className="block h-full w-full object-cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        )
                    ) : (
                        <h3>Error Loading Image</h3>
                    )}
                </Swiper>
            </div>
            {/* Thumbnail */}
            <div className="container">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={false}
                    spaceBetween={12}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="thumbs mt-3 h-32 w-full rounded-lg"
                >
                    {filteredImageProps.length ? (
                        filteredImageProps.map(
                            (item: ImageSwiper, index: number) => (
                                <SwiperSlide key={index}>
                                    <button
                                        className="flex h-full w-full items-center justify-center"
                                        onClick={() =>
                                            handleThumbnailClick(index)
                                        }
                                    >
                                        <Image
                                            src={item.media_url}
                                            alt={
                                                item.caption ||
                                                'Instagram Image'
                                            }
                                            width={1000}
                                            height={1000}
                                            priority={true}
                                            className={`block h-full w-full object-cover transition-opacity duration-300 ${
                                                activeIndex === index
                                                    ? 'opacity-100'
                                                    : 'opacity-50'
                                            }`}
                                        />
                                    </button>
                                </SwiperSlide>
                            )
                        )
                    ) : (
                        <h3>Error Loading Thumbnail</h3>
                    )}
                </Swiper>
                {/* Open in Instagram Link */}
                {filteredImageProps.length > 0 && (
                    <div className="mb-3">
                        <Link
                            href={
                                filteredImageProps[activeIndex]?.permalink ||
                                '#'
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="text-blue-500 underline font-bold p-3 md:px-0">
                                Open image in Instagram
                            </p>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}

export default InstagramSwiper
