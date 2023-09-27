import React, { useState, useEffect } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapa = () => {
    const [viewport, setViewport] = useState({
        longitude: -75.3614029,
        latitude: 5.9736872,
        zoom: 18
    });

    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);

    // const getUserLocation = () => {
    //     if ('geolocation' in navigator) {
    //         navigator.geolocation.getCurrentPosition((position) => {
    //             const { latitude, longitude } = position.coords;
    //             setViewport({
    //                 ...viewport,
    //                 latitude,
    //                 longitude,
    //             });
    //         }, (error) => {
    //             console.error('Error al obtener la ubicación del usuario:', error);
    //         });
    //     } else {
    //         console.error('Geolocalización no está disponible en este navegador.');
    //     }
    // };
    // useEffect(() =>{
    //     getUserLocation()
    // }, [])
    const handleMapClick = (event) => {
        const { lat, lng } = event.lngLat; // Usa lat y lng en lugar de latitude y longitude
        
        // Verifica si lat y lng son números válidos
        if (!isNaN(lat) && !isNaN(lng)) {
            if (!origin) {
                setOrigin({ latitude: lat, longitude: lng });
            } else if (!destination) {
                setDestination({ latitude: lat, longitude: lng });
            }
        } else {
            console.error('Coordenadas inválidas:', lat, lng);
        }
    };

    const calculateRoute = async () => {
        if (origin && destination) {
            const apiKey = 'pk.eyJ1IjoibWV0NGxsMSIsImEiOiJjbG4xMDZ5ZGkwbnQzMmtteTNwbGFtd2lnIn0.Id4b3HC91RVs0wZVXOgPZA'; // Reemplaza con tu clave de API de Directions
            const apiUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?access_token=${apiKey}`;

            try {
                const response = await axios.get(apiUrl);
                const data = await response.data;

                // Maneja la respuesta de la API aquí (puedes mostrar la ruta en el mapa)
                console.log(data);
            } catch (error) {
                console.error('Error al calcular la ruta:', error);
            }
        }
    };

    return (
        <div className='flex justify-center flex-col items-center'>
            <Map
                {...viewport}
                style={{ width: 600, height: 400 }}
                mapStyle="mapbox://styles/mapbox/streets-v12"
                onViewportChange={(newViewport) => setViewport(newViewport)}
                mapboxAccessToken="pk.eyJ1IjoibWV0NGxsMSIsImEiOiJjbG4xMDZ5ZGkwbnQzMmtteTNwbGFtd2lnIn0.Id4b3HC91RVs0wZVXOgPZA"
                onClick={handleMapClick}
                initialViewState={{
                    longitude: -75.3614029,
                    latitude: 5.9736872,
                    zoom: 18
                }}
            >
                {/* /* Marcadores para origen y destino */}
                {origin && (
                    <Marker
                        latitude={origin.latitude}
                        longitude={origin.longitude}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <div>Origen</div>
                    </Marker>
                )}

                {destination && (
                    <Marker
                        latitude={destination.latitude}
                        longitude={destination.longitude}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <div>Destino</div>
                    </Marker>
                )}
                {/* Control de navegación */}
                <div style={{ position: 'absolute', top: 10, right: 10 }}>
                    <NavigationControl />
                </div>
            </Map>

            <button onClick={calculateRoute}>Calcular Ruta</button>
        </div>
    );
};

export default Mapa