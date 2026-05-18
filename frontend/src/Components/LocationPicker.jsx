import { Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { useEffect } from "react";

function LocationPicker({ selectedPosition, setSelectedPosition }) {
  const map = useMap();

  // click on map → set position
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setSelectedPosition({ lat, lng });
    },
  });

  // when position changes → move map
  useEffect(() => {
    if (selectedPosition) {
      map.flyTo(
        [selectedPosition.lat, selectedPosition.lng],
        14
      );
    }
  }, [selectedPosition, map]);

  return selectedPosition ? (
    <Marker position={[selectedPosition.lat, selectedPosition.lng]}>
      
      <Popup>Event Location Selected</Popup>
    </Marker>
  ) : null;
}

export default LocationPicker;