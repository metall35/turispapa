import Map from 'react-map-gl';

function Mapa() {
    return (
        <Map
            mapboxAccessToken="pk.eyJ1IjoibWV0NGxsMSIsImEiOiJjbG4xMDZ5ZGkwbnQzMmtteTNwbGFtd2lnIn0.Id4b3HC91RVs0wZVXOgPZA"
            initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14
            }}
            style={{ width: 600, height: 400 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        />
    );
}

export default Mapa