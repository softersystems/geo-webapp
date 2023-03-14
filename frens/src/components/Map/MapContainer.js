import React, { useEffect, useState } from "react";
import Map from "./Map";

export default function MapContainer() {
  const [userCoord, setUserCoord] = useState([52.49, 13.38]);

  const getUserLocation = () => {
    const success = async (pos) => {
      const crd = await pos.coords;
      setUserCoord([crd.latitude, crd.longitude]);
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return <Map userCoord={userCoord} />;
}
