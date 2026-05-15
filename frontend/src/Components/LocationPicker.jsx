
import { Marker, Popup, useMapEvents } from "react-leaflet";

function LocationPicker({
  selectedPosition,
  setSelectedPosition,
}) {

  useMapEvents({
    click(e) {

      const { lat, lng } = e.latlng;

      setSelectedPosition({
        lat,
        lng,
      });
    },
  });

  return selectedPosition ? (
    <Marker
      position={[
        selectedPosition.lat,
        selectedPosition.lng,
      ]}
    >
      <Popup>
        Event Location Selected
      </Popup>
    </Marker>
  ) : null;
}

export default LocationPicker;

