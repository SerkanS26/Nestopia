export const getLatLngFromAddress = async (address) => {
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const encodedAddress = encodeURIComponent(address);
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${accessToken}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.features && data.features.length > 0) {
      const location = data.features[0].center;
      const longitude = location[0];
      const latitude = location[1];

      return { lat: latitude, lng: longitude };
    } else {
      console.error("Geocoding failed: No results found");
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
