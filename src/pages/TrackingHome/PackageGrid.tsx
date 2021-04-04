import React, { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { userLanguage } from "../../shared/state/userLanguage";

import { RenderCard } from "./packageCard";
import { IPackage } from "../../shared/Interfaces/IPackage";
import { recoilFetch } from "../../shared/state/recoilFetch";
import { enPackageGrid } from "../../assests/info/language/english/enPackageGrid";
import { swPackageGrid } from "../../assests/info/language/swedish/swPackageGrid";

export const PackageGrid: React.FC = () => {
  const [language] = useRecoilState(userLanguage);
  const { status, data } = useRecoilValue(recoilFetch);
  const [filterData, setFilterData] = useState<IPackage[]>([]);

  const [{ search, noPackages, placeholder, heading }, setLanguage] = useState(
    enPackageGrid[0]
  );

  useEffect(() => {
    if (language === "EN") {
      setLanguage(enPackageGrid[0]);
    } else {
      setLanguage(swPackageGrid[0]);
    }
  }, [setLanguage, language]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="packages">
      {status === 200 && (
        <div className="packages">
          <h2 className="packages__heading">{heading}</h2>

          <form className="packages__form" onSubmit={handleSubmit}>
            <label className="packages__form--label">
              {search}
              <input
                className="packages__form--input"
                placeholder={placeholder}
                onChange={(event) => {
                  setFilterData(
                    data.filter((value: any) =>
                      value.parcel_id.includes(event.target.value)
                    )
                  );
                }}
                type="text"
                name="name"
              />
            </label>
          </form>
          <div className="packages__grid">
            {filterData.length > 0 && <RenderCard data={filterData} />}
            {filterData.length === 0 && <RenderCard data={data} />}
          </div>
        </div>
      )}
      {status === 204 && <h2>{noPackages}</h2>}
    </div>
  );
};
