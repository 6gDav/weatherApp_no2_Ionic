import React, { useEffect, useState } from 'react';
import Infos from '../UserDate/UserDate';
import L from 'leaflet';
import axios from 'axios';

import 'leaflet/dist/leaflet.css';


function NewGeoLocationMap() {
  const [townName, setTownName] = useState<string>(Infos.TownName);
  const [coordinates, setCoordinates] = useState<L.LatLng | null>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);

  useEffect(() => {
    const town = Infos.TownName || "London"; 
    setTownName(town);

    const fetchCoordinates = async () => {
      try {
        const response = await axios.get("https://nominatim.openstreetmap.org/search", {
          params: {
            q: town,
            format: "json",
            addressdetails: 1
          }
        });

        if (response.data && response.data.length > 0) {
          const { lat, lon } = response.data[0];
          setCoordinates(new L.LatLng(lat, lon));
        } else {
          console.error("No coordinates found for the given town.");
        }
      } catch (error) {
        console.error("Error fetching coordinates: ", error);
      }
    };

    fetchCoordinates();
  }, [[Infos.TownName]]);

  useEffect(() => {
    if (coordinates && !mapInstance) {
      const map = L.map("map", {
        center: coordinates,
        zoom: 5,
        dragging: true, 
        touchZoom: true,
        scrollWheelZoom: true,
        zoomControl: true 
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker(coordinates).addTo(map)
        .openPopup();

      setMapInstance(map); 
    } 
    else if (coordinates && mapInstance) 
    {
      mapInstance.setView(coordinates);
      mapInstance.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          layer.setLatLng(coordinates);
        }
      });
    }
  }, [coordinates, townName, mapInstance]);

  return (
    <div id="map" style={{ height: "900px" }}></div>
  );
}

export default NewGeoLocationMap;
