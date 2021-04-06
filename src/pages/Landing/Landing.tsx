import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userLanguage } from "../../shared/state/userLanguage";

import { enLanding } from "../../utils/language/english/enLanding";
import { swLanding } from "../../utils/language/swedish/swLanding";

import deliveryService from "../../assests/img/undraw_deliveries_131a.svg";
import { Link } from "react-router-dom";

export const Landing: React.FC = () => {
  const [language] = useRecoilState(userLanguage);
  const [
    { welcome, deliveryNeeds, imgDelivery, enter },
    setLanguage,
  ] = useState(enLanding[0]);

  useEffect(() => {
    if (language === "EN") {
      setLanguage(enLanding[0]);
    } else {
      setLanguage(swLanding[0]);
    }
  }, [setLanguage, language]);

  return (
    <section className="landing">
      <h1 className="landing-title">{welcome}</h1>
      <h2 className="landing-subtitle">{deliveryNeeds}</h2>

      <div className="landing-btn">
        <Link className="landing-btn--link" to="/home">
          {enter}
        </Link>
      </div>
      <div></div>

      <img className="landing-img" src={deliveryService} alt={imgDelivery} />
    </section>
  );
};
