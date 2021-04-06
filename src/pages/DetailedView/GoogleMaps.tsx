import { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMediaPredicate } from "react-media-hook";
import { useRecoilState } from "recoil";
import { userLanguage } from "../../shared/state/userLanguage";

import { IGoogleMaps } from "../../types/Interfaces/IGoogleMaps";
import { mapStyles } from "./GoogleMap_style";
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

export const Map: React.FC<IGoogleMaps> = ({ lat, lng, label }) => {
  const [language] = useRecoilState(userLanguage);
  const [{ loading, loadErrorLan }, setLanguage] = useState(enMap[0]);

  const tablet = useMediaPredicate("(min-width: 700px)");

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

  if (loadError) return <div>{loadErrorLan}</div>;
  if (!isLoaded) return <div>{loading}</div>;

  return (
    <div className="googleMap__detailedView">
      {tablet && (
        <GoogleMap
          mapContainerStyle={mapContainerStyleLarge}
          zoom={7}
          center={{ lat, lng }}
          options={options}
        >
          <Marker position={{ lat, lng }} label={label} />
        </GoogleMap>
      )}
      {!tablet && (
        <GoogleMap
          mapContainerStyle={mapContainerStyleSmall}
          zoom={7}
          center={{ lat, lng }}
          options={options}
        >
          <Marker position={{ lat, lng }} label={label} />
        </GoogleMap>
      )}
    </div>
  );
};
