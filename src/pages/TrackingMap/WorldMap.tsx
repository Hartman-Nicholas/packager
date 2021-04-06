import { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useRecoilValue } from "recoil";
import { useHistory } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";
import { useRecoilState } from "recoil";
import { userLanguage } from "../../shared/state/userLanguage";

import { recoilFetch } from "../../shared/state/recoilFetch";
import { mapStyles } from "./WorldMap_style";
import { IPackage } from "../../types/Interfaces/IPackage";
import { enMap } from "../../utils/language/english/enMap";
import { swMap } from "../../utils/language/swedish/swMap";

const libraries: any = ["places"];
const mapContainerStyleSmall = {
  width: "100vw",
  height: "50vh",
};

const mapContainerStyleLarge = {
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
  const [language] = useRecoilState(userLanguage);
  const { data } = useRecoilValue(recoilFetch);
  const history = useHistory();
  const tablet = useMediaPredicate("(min-width: 700px)");
  const [{ loading, loadErrorLan, title }, setLanguage] = useState(enMap[0]);

  useEffect(() => {
    if (language === "EN") {
      setLanguage(enMap[0]);
    } else {
      setLanguage(swMap[0]);
    }
  }, [setLanguage, language]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  const RenderMarker = () => {
    const render = data.map((value: IPackage) => {
      const onClick = () => {
        history.push({
          pathname: "/detailedView",
          state: { fromNotifications: { data: value } },
        });
      };
      return (
        <Marker
          onClick={onClick}
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

  if (loadError) return <div>{loadErrorLan}</div>;
  if (!isLoaded) return <div>{loading}</div>;

  return (
    <div className="worldMap">
      <h2 className="worldMap__title">{title}</h2>
      <div className="googleMap__worldView">
        {tablet && (
          <GoogleMap
            mapContainerStyle={mapContainerStyleLarge}
            zoom={3}
            center={center}
            options={options}
          >
            <RenderMarker />
          </GoogleMap>
        )}
        {!tablet && (
          <GoogleMap
            mapContainerStyle={mapContainerStyleSmall}
            zoom={2}
            center={center}
            options={options}
          >
            <RenderMarker />
          </GoogleMap>
        )}
      </div>
    </div>
  );
};
