import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userLanguage } from "../../shared/state/userLanguage";

import { enDetailedView } from "../../assests/info/language/english/enDetailedView";
import { swDetailedView } from "../../assests/info/language/swedish/swDetailedView";
import { ILinkProps } from "../../shared/Interfaces/ILinkProps";
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
    <section>
      <h1>Detailed View</h1>
      <ul>
        <li>
          {parcel}
          {data.parcel_id}
        </li>
        <li>
          {sender}
          {data.sender}
        </li>
        <li>
          {status}
          {data.status}
        </li>
        <li>
          {locationName}
          {data.location_name}
        </li>
        <li>
          {locationStatus}
          {data.location_status_ok}
        </li>
        <li>
          {verification}
          {data.verification_required}
        </li>

        <li>
          ETA: {etaDateString} @ {etaTimeString}
        </li>
        <li>
          {update} {dateString} @ {timeString}
        </li>
      </ul>

      <Map
        lat={data.location_coordinate_latitude}
        lng={data.location_coordinate_longitude}
        label={data.location_name}
      />
      <button onClick={() => props.history.goBack()}>back</button>
    </section>
  );
};
