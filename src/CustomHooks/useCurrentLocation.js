import { useEffect, useState } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function getLocation() {
    setLoading(true);
    setError(null);
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
      setLoading(false);
    });
  }

  useEffect(() => getLocation(), []);

  return { location, loading, error, onChangeLocation: getLocation };
}
