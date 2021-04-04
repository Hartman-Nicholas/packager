import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import { IGoogleMaps } from "../../shared/Interfaces/IGoogleMaps";
import { mapStyles } from "./GoogleMap_style";

const libraries: any = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export const Map: React.FC<IGoogleMaps> = ({ lat, lng, label }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <div>
      <h1>packager</h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={7}
        center={{ lat, lng }}
        options={options}
      >
        <Marker position={{ lat, lng }} label={label} />
      </GoogleMap>
    </div>
  );
};
