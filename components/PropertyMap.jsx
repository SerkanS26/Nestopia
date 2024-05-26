"use client";

import { useEffect, useState } from "react";

import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";

import { getLatLngFromAddress } from "@/utils/getLatLngFromAddress";

import Spinner from "./Spinner";
import Image from "next/image";
import pin from "@/assets/images/pin.svg";

const PropertyMap = ({ property }) => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 12,
    width: "100%",
    height: "500px",
  });

  const [loading, setLoading] = useState(true);
  const [geocodeError, setGeocodeError] = useState(false);

  useEffect(() => {
    const fetchLatLng = async () => {
      try {
        const { lat, lng } = await getLatLngFromAddress(
          `${property.location.street}, ${property.location.city}, ${property.location.state} ${property.location.zipcode}`
        );
        setLat(lat);
        setLng(lng);
        setViewport((prev) => ({ ...prev, latitude: lat, longitude: lng }));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching lat/lng:", error);
        setGeocodeError(true);
        setLoading(false);
      }
    };

    fetchLatLng();
  }, [
    property.location.street,
    property.location.city,
    property.location.state,
    property.location.zipcode,
  ]);

  if (loading) return <Spinner loading={loading} />;

  if (geocodeError) return <div className="text-xl">Failed to load map</div>;

  return (
    !loading && (
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        mapLib={import("mapbox-gl")}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 15,
        }}
        style={{ width: "100%", height: 500 }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <Marker longitude={lng} latitude={lat} anchor="bottom">
          <Image src={pin} alt="location" width={40} height={40} />
        </Marker>
      </Map>
    )
  );
};

export default PropertyMap;
