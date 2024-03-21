'use client'
import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'

type EventData = {
    fields: {
        city: string
        country: string
        eventDate: string
        eventDescription: string
        eventName: string
        location: string
    }
}

type LocationCoordinates = {
    latitude: number
    longitude: number
}

type Props = {
    eventData: EventData[]
}

const MapEffect = ({ onMapReady }: { onMapReady: (map: any) => void }) => {
    const map = useMap()
    useEffect(() => {
        if (map) {
            onMapReady(map)
        }
    }, [map, onMapReady])
    return null
}

const formatDateTime = (inputDateTime: string) => {
    const dateTime = new Date(inputDateTime)
    const day = dateTime.getDate().toString().padStart(2, '0')
    const month = (dateTime.getMonth() + 1).toString().padStart(2, '0')
    const year = dateTime.getFullYear().toString()
    const hours = dateTime.getHours().toString().padStart(2, '0')
    const minutes = dateTime.getMinutes().toString().padStart(2, '0')
    return `${day}.${month}.${year} ${hours}:${minutes}`
}

const EventMap = ({ eventData }: Props) => {
    const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null)
    const ZOOM_LEVEL = 14
    const mapRef = useRef<L.Map | null>(null)

    if (!eventData || eventData.length === 0) {
        return <div>There are no upcoming events</div>
    }

    const handleEventClick = (event: EventData) => {
        setSelectedEvent(event === selectedEvent ? null : event)
        const location = event.fields.location
        if (location && mapRef.current) {
            const [latitude, longitude] = location.split(',').map(parseFloat)
            mapRef.current.flyTo([latitude, longitude], ZOOM_LEVEL)
        }
    }

    const markers: LocationCoordinates[] = eventData.map((event) => {
        const [latitude, longitude] = event.fields.location
            .split(',')
            .map(parseFloat)
        return { latitude, longitude }
    })

    return (
        <div className="flex flex-col items-center justify-center w-full p-4 bg-foreground-light dark:bg-foreground-dark shadow-2xl">
            <div className="w-full max-w-[2000px]">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-4/5">
                        <MapContainer
                            center={[markers[0].latitude, markers[0].longitude]}
                            zoom={ZOOM_LEVEL}
                            className="h-[60vh] w-full max-w-[2000px]"
                            scrollWheelZoom={false}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; contributors of OpenStreetMap"
                            />

                            {markers.map((marker, index) => (
                                <Marker
                                    key={index}
                                    position={[
                                        marker.latitude,
                                        marker.longitude
                                    ]}
                                >
                                    <Popup>
                                        {eventData[index].fields.eventName}
                                        <br />
                                        {
                                            eventData[index].fields
                                                .eventDescription
                                        }
                                    </Popup>
                                </Marker>
                            ))}
                            <MapEffect
                                onMapReady={(mapInstance) => {
                                    mapRef.current = mapInstance
                                }}
                            />
                        </MapContainer>
                    </div>
                    <div className="md:pl-4 w-full lg:w-1/5 pt-3 lg:pt-0">
                        <ul className="max-h-[60vh] overflow-y-auto">
                            {eventData.map((event, index) => (
                                <li key={index} className="pb-2">
                                    <div
                                        className="cursor-pointer hover:underline flex flex-row justify-between items-center select-none px-3 pb-3 border-solid border-b-2 border-text-dark dark:border-text-light"
                                        onClick={() => handleEventClick(event)}
                                    >
                                        <p className="text-lg font-semibold">
                                            {event.fields.eventName}
                                        </p>
                                        <div className="flex items-center">
                                            {' '}
                                            {/* Added wrapper div */}
                                            {selectedEvent === event ? (
                                                <SlArrowUp />
                                            ) : (
                                                <SlArrowDown />
                                            )}
                                        </div>
                                    </div>
                                    {selectedEvent === event && (
                                        <div className="px-2 py-1.5">
                                            <p className="text-xl">
                                                {event.fields.city},{' '}
                                                {event.fields.country}
                                            </p>
                                            <p className="pt-3">
                                                Date:{' '}
                                                {formatDateTime(
                                                    event.fields.eventDate
                                                )}
                                            </p>
                                            <p className="pt-4">
                                                {event.fields.eventDescription}
                                            </p>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventMap
