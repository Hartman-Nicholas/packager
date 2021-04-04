import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";

import { recoilFetch } from "../shared/state/recoilFetch";
import { userLanguage } from "./state/userLanguage";
import { enHeader } from "../assests/info/language/english/enHeader";
import { swHeader } from "../assests/info/language/swedish/swHeader";
import britishFlag from "../assests/img/BritishFlag.png";
import swedenFlag from "../assests/img/SwedenFlag.png";

export const Header: React.FC = () => {
  const { data } = useRecoilValue(recoilFetch);
  const { pathname } = useLocation();
  const [language, setLanguage] = useRecoilState(userLanguage);
  const [{ home, trackMap, logout, user }, setText] = useState(enHeader[0]);

  const onChangeEnglish: any = () => {
    setLanguage("EN");
    setText(enHeader[0]);
  };

  const onChangeSwedish: any = () => {
    setLanguage("SW");
    setText(swHeader[0]);
  };

  return (
    <div>
      {!(pathname === "/") && (
        <header className="header">
          {language === "EN" && (
            <img
              className="header__img"
              onClick={onChangeSwedish}
              src={swedenFlag}
              alt="Swedish Flag"
            />
          )}
          {language === "SW" && (
            <img
              className="header__img"
              onClick={onChangeEnglish}
              src={britishFlag}
              alt="British Flag"
            />
          )}

          <nav>
            <ul className="header__list">
              <li className="header__list__item">
                {" "}
                <Link className="header__list--logo" to="/home">
                  {" "}
                  <i className="fas fa-shipping-fast"></i> Packager
                </Link>
              </li>
              <li className="header__list__item">
                <Link className="header__list__link" to="/home">
                  {home}
                </Link>
              </li>
              <li className="header__list__item">
                <Link className="header__list__link" to="/trackingMap">
                  {trackMap}
                </Link>
              </li>
              <li className="header__list__item">
                <Link className="header__list__link" to="/">
                  {logout}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__user">
            {user}
            {data[0].user_name}
          </div>
        </header>
      )}
      {pathname === "/" && (
        <header className="header">
          {language === "EN" && (
            <img
              className="header__img"
              onClick={onChangeSwedish}
              src={swedenFlag}
              alt="Swedish Flag"
            />
          )}
          {language === "SW" && (
            <img
              className="header__img"
              onClick={onChangeEnglish}
              src={britishFlag}
              alt="British Flag"
            />
          )}

          <nav>
            <ul className="header__list">
              <li className="header__list__item">
                <Link className="header__list--logo" to="/home">
                  <i className="fas fa-shipping-fast"></i> Packager
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </div>
  );
};
