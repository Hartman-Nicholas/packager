import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useRecoilValue } from "recoil";

import { recoilFetch } from "../../shared/state/recoilFetch";
import { mapStyles } from "./WorldMap_style";
import { IPackage } from "../../shared/Interfaces/IPackage";

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

const center = {
  lat: 40.866667,
  lng: 34.566667,
};

export const WorldMap: React.FC = () => {
  const { data } = useRecoilValue(recoilFetch);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  const RenderMarker = () => {
    const render = data.map((value: IPackage) => {
      return (
        <Marker
          key={value.id}
          position={{
            lat: value.location_coordinate_latitude,
            lng: value.location_coordinate_longitude,
          }}
          label={value.location_name}
        />
      );
    });
    return render;
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <div>
      <h1>packager</h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={2}
        center={center}
        options={options}
      >
        <RenderMarker />
      </GoogleMap>
    </div>
  );
};
