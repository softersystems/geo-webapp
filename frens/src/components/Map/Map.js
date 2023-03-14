import React, { useEffect, useState } from "react";
// ES6
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapbox = ReactMapboxGl({
  accessToken: "pk.eyJ1Ijoic2FuaWFvbmxpbmUiLCJhIjoiY2w5dm1qbXR6MHpmZjN2bXl5NTM0amFobCJ9.T8zMsiXPu6nZLTBWqwYg2A",
});

export default function Map({ userCoord }) {
  const [viewport, setViewport] = useState({
    latitude: userCoord[0],
    longitude: userCoord[1],
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });
  const [layer, setLayer] = useState("2b1f5094-90fc-4cee-b5ea-0943e369c7b1");
  const [expandMarker, setExpandMarker] = useState(null);
  // const [addMarker, { loading }] = useMutation(ADD_MARKER, {
  //   update: updateMarkersCache,
  //   // onCompleted: () => {
  //   // },
  // });

  useEffect(() => {
    setViewport({
      latitude: userCoord[0],
      longitude: userCoord[1],
      zoom: 14,
      bearing: 0,
      pitch: 0,
    });
  }, [userCoord]);

  return (
    <Mapbox
      style="mapbox://styles/saniaonline/clegbtcbe002g01mscbjrx7d5"
      containerStyle={{
        height: "105vh",
        width: "100vw",
        position: "fixed",
        left: 0,
      }}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Mapbox>
  );
}
