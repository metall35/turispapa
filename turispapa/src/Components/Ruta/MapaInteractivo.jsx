import React, { useState } from 'react';
import Map, { Marker, NavigationControl, Source, Layer } from 'react-map-gl';
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { randomColor } from 'randomcolor';

const Mapa = () => {
    const [viewport, setViewport] = useState({
        longitude: -75.3614029,
        latitude: 5.9736872,
        zoom: 18,
    });
    const [origin, setOrigin] = useState(null);
    const [destinations, setDestinations] = useState([]);
    const [routeData, setRouteData] = useState(null);
    const [loaderRoute, setLoaderRoute] = useState(true);
    const [duration, setDuration] = useState(null);
    const [distance, setDistance] = useState(null);
    const [steps, setSteps] = useState([]);

    const calculateRoute = async () => {
        if (origin && destinations.length > 0) {
            const apiKey = 'pk.eyJ1IjoibWV0NGxsMSIsImEiOiJjbG4xMDZ5ZGkwbnQzMmtteTNwbGFtd2lnIn0.Id4b3HC91RVs0wZVXOgPZA'; // Reemplaza con tu clave de API de Directions
            const destinationCoordinates = destinations.map(
                (destination) => `${destination.longitude},${destination.latitude}`
            );
            const apiUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${origin.longitude},${origin.latitude};${destinationCoordinates.join(
                ';'
            )}?alternatives=true&continue_straight=true&geometries=geojson&language=es&overview=full&steps=true&access_token=${apiKey}`;
            if (loaderRoute) {
                try {
                    const response = await axios.get(apiUrl);
                    const data = response.data;
                    // Maneja la respuesta de la API aquí (puedes mostrar la ruta en el mapa)
                    console.log(data);
                    setRouteData(data);
                    setLoaderRoute(false);

                    // Obtener la duración y la distancia
                    const route = data.routes[0];
                    const routeDuration = route.duration / 60; // Duración en minutos
                    const routeDistance = route.distance / 1000; // Distancia en kilómetros
                    setDuration(routeDuration.toFixed(2)); // Redondea a 2 decimales
                    setDistance(routeDistance.toFixed(2)); // Redondea a 2 decimales

                    // Obtener los pasos
                    const routeSteps = route.legs[0].steps;
                    setSteps(routeSteps);
                } catch (error) {
                    console.error('Error al calcular la ruta:', error);
                }
            }
        }
    };

    const handleMapClick = (event) => {
        const { lat, lng } = event.lngLat;

        if (!isNaN(lat) && !isNaN(lng)) {
            if (!origin) {
                setOrigin({ latitude: lat, longitude: lng });
            } else {
                setDestinations([...destinations, { latitude: lat, longitude: lng }]);
                setLoaderRoute(true);
            }
        } else {
            console.error('Coordenadas inválidas:', lat, lng);
        }
    };
    calculateRoute();

    return (
        <div className='flex justify-center flex-col items-center mb-8 w-full'>
            <Map
                style={{ width: '80%', height: 600 }}
                mapStyle='mapbox://styles/mapbox/streets-v12'
                mapboxAccessToken='pk.eyJ1IjoibWV0NGxsMSIsImEiOiJjbG4xMDZ5ZGkwbnQzMmtteTNwbGFtd2lnIn0.Id4b3HC91RVs0wZVXOgPZA'
                onClick={handleMapClick}
                initialViewState={{
                    longitude: -75.3614029,
                    latitude: 5.9736872,
                    zoom: 18,
                }}
            >
                {/* Marcadores para origen */}
                {origin && (
                    <Marker
                        latitude={origin.latitude}
                        longitude={origin.longitude}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <HiOutlineLocationMarker className='fill-red-600 w-6 h-6 ' />
                    </Marker>
                )}

                {/* Marcadores para destinos */}
                {destinations.map((destination, index) => (
                    <Marker
                        key={index}
                        latitude={destination.latitude}
                        longitude={destination.longitude}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <HiOutlineLocationMarker
                            className={`w-6 h-6`}
                            style={{ stroke: randomColor({ luminosity: 'dark' }) }}
                        />
                    </Marker>
                ))}

                {/* Ruta */}
                {routeData && (
                    <Source type='geojson' data={routeData.routes[0].geometry}>
                        <Layer
                            type='line'
                            paint={{
                                'line-color': '#14A44D',
                                'line-width': 4,
                            }}
                        />
                    </Source>
                )}

                {/* Control de navegación */}
                <div className='absolute top-2 right-2'>
                    <NavigationControl />
                </div>

                {/* Duración y distancia */}
                {duration && distance && (
                    <div className='absolute top-2 left-2 bg-white p-2 rounded-lg shadow-md'>
                        <p>Duración: {duration} minutos</p>
                        <p>Distancia: {distance} km</p>
                    </div>
                )}

                {/* Pasos */}
                {steps.length > 0 && (
                    <div className='absolute bottom-8 left-2 bg-white p-2 rounded-lg shadow-md'>
                        <h2>Pasos de la ruta:</h2>
                        <ol>
                            {steps.map((step, index) => (
                                <li key={index}>{step.maneuver.instruction}</li>
                            ))}
                        </ol>
                    </div>
                )}
            </Map>
        </div>
    );
};

export default Mapa;
