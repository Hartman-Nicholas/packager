import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userLanguage } from "../../shared/state/userLanguage";

import { enDetailedView } from "../../utils/language/english/enDetailedView";
import { swDetailedView } from "../../utils/language/swedish/swDetailedView";
import { ILinkProps } from "../../types/Interfaces/ILinkProps";
import { Map } from "./GoogleMaps";

export const DetailedView: React.FC<ILinkProps> = (props: ILinkProps) => {
  const [language] = useRecoilState(userLanguage);
  const [
    {
      parcel,
      sender,
      status,
      update,
      locationName,
      locationStatus,
      verification,
      heading,
    },
    setLanguage,
  ] = useState(enDetailedView[0]);

  useEffect(() => {
    if (language === "EN") {
      setLanguage(enDetailedView[0]);
    } else {
      setLanguage(swDetailedView[0]);
    }
  }, [setLanguage, language]);

  const { data } = props.location.state.fromNotifications;

  const dateString = data.last_updated.substring(0, 10);
  const timeString = data.last_updated.substring(11, 16);
  const etaDateString = data.eta.substring(0, 10);
  const etaTimeString = data.eta.substring(11, 16);

  return (
    <section className="detailedView">
      <h1 className="detailedView--heading">{heading}</h1>
      <ul className="detailedView__list">
        <li className="detailedView__list--item">
          {parcel}
          {data.parcel_id}
        </li>
        <li className="detailedView__list--item">
          {sender}
          {data.sender}
        </li>
        <li className="detailedView__list--item">
          {status}
          {data.status}
        </li>
        <li className="detailedView__list--item">
          {locationName}
          {data.location_name}
        </li>
        {language === "EN" && (
          <li className="detailedView__list--item">
            {locationStatus}
            {data.location_status_ok ? "Okay" : "Not Okay"}
          </li>
        )}
        {language === "SW" && (
          <li className="detailedView__list--item">
            {locationStatus}
            {data.location_status_ok ? "Okej" : "Inte okej"}
          </li>
        )}
        {language === "EN" && (
          <li className="detailedView__list--item">
            {verification}
            {data.verification_required ? "Yes" : "No"}
          </li>
        )}
        {language === "SW" && (
          <li className="detailedView__list--item">
            {verification}
            {data.verification_required ? "Ja" : "Nej"}
          </li>
        )}

        <li className="detailedView__list--item">
          ETA: {etaDateString} @ {etaTimeString}
        </li>
        <li className="detailedView__list--item">
          {update} {dateString} @ {timeString}
        </li>
      </ul>

      <button className="btn" onClick={() => props.history.goBack()}>
        back
      </button>

      <Map
        lat={data.location_coordinate_latitude}
        lng={data.location_coordinate_longitude}
        label={data.location_name}
      />
    </section>
  );
};
