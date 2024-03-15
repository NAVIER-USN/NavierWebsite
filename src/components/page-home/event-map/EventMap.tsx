'use client'
import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { Map } from 'leaflet'

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

const MapEffect = ({ onMapReady }: { onMapReady: (map: Map) => void }) => {
    const map = useMap()
    useEffect(() => {
        if (map) {
            onMapReady(map)
        }
    }, [map, onMapReady])
    return null
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
        <div className="flex flex-row">
            <div className="h-full w-1/2 overflow-y-auto">
                <div className="bg-foreground-light dark:bg-foreground-dark">
                    <h3 className="text-2xl">Upcoming events</h3>
                    <ul>
                        {eventData.map((event, index) => (
                            <li
                                key={index}
                                onClick={() => handleEventClick(event)}
                            >
                                {event.fields.eventName}
                                {selectedEvent === event && (
                                    <div>
                                        <p>{event.fields.eventDescription}</p>
                                        <p>
                                            {event.fields.city},{' '}
                                            {event.fields.country}
                                        </p>
                                        <p>{event.fields.eventDate}</p>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="h-full w-1/2">
                <MapContainer
                    center={[markers[0].latitude, markers[0].longitude]}
                    zoom={ZOOM_LEVEL}
                    style={{ height: '60vh' }}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; contributors of OpenStreetMap"
                    />

                    {markers.map((marker, index) => (
                        <Marker
                            key={index}
                            position={[marker.latitude, marker.longitude]}
                        >
                            <Popup>
                                {eventData[index].fields.eventName}
                                <br />
                                {eventData[index].fields.eventDescription}
                            </Popup>
                        </Marker>
                    ))}
                    <MapEffect
                        onMapReady={(mapInstance) => {
                            mapRef.current = mapInstance // Now you have access to the map instance
                        }}
                    />
                </MapContainer>
            </div>
        </div>
    )
}

export default EventMap
