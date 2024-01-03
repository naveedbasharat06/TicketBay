import { useState, useEffect } from "react";
const ConvertLocation = (location: any) => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const geocodeEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          location || ""
        )}&key=${process.env.NEXT_PUBLIC_MAP_KEY}`;
        const response = await fetch(geocodeEndpoint);
        const data = await response.json();
        const locationData = data.results?.[0]?.geometry?.location;
        if (locationData) {
          setCoordinates({ lat: locationData.lat, lng: locationData.lng });
        } else {
          console.error("Location data is missing 'geometry.location'");
        }
      } catch (error) {
        console.error("Error geocoding address:", error);
      } finally {
        setLoading(false);
      }
    };

    if (location) {
      fetchLocationData();
    }
  }, [location]);

  return { coordinates, loading };
};

export default ConvertLocation;
