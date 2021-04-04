import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userLanguage } from "../../shared/state/userLanguage";
import { Link } from "react-router-dom";

import { IPackage } from "../../shared/Interfaces/IPackage";
import { enRenderCard } from "../../assests/info/language/english/enRenderCard";
import { swRenderCard } from "../../assests/info/language/swedish/swRenderCard";

export const RenderCard: React.FC<{ data: IPackage[] }> = ({ data }) => {
  const [language] = useRecoilState(userLanguage);
  const [{ parcel, sender, status, update, view }, setLanguage] = useState(
    enRenderCard[0]
  );

  useEffect(() => {
    if (language === "EN") {
      setLanguage(enRenderCard[0]);
    } else {
      setLanguage(swRenderCard[0]);
    }
  }, [setLanguage, language]);

  const Render: any = data.map((data: IPackage) => {
    const dateString = data.last_updated.substring(0, 10);
    const timeString = data.last_updated.substring(11, 16);
    const etaDateString = data.eta.substring(0, 10);
    const etaTimeString = data.eta.substring(11, 16);

    return (
      <div className="packageCard" key={data.id}>
        <Link
          className="packageCard__link"
          to={{
            pathname: "./DetailedView",
            state: {
              fromNotifications: { data },
            },
          }}
        >
          <div className="packageCard__link--img">
            <i className="fas fa-parachute-box">{view}</i>
          </div>

          <ul className="packageCard__list">
            <li className="packageCard__list--item">
              {parcel} {data.parcel_id}
            </li>
            <li className="packageCard__list--item">
              {sender} {data.sender}
            </li>
            <li className="packageCard__list--item">
              {status} {data.status}
            </li>
            <li className="packageCard__list--item">
              ETA: {etaDateString} @ {etaTimeString}
            </li>
            <li className="packageCard__list--item">
              {update} {dateString} @ {timeString}
            </li>
          </ul>
        </Link>
      </div>
    );
  });

  return Render;
};
