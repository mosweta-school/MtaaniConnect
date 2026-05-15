
import { Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

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
