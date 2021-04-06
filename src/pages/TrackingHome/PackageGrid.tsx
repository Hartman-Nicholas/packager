import React, { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { userLanguage } from "../../shared/state/userLanguage";

import { recoilFetch } from "../../shared/state/recoilFetch";
import { PackageFilter } from "./packageFilter";
import { enPackageGrid } from "../../utils/language/english/enPackageGrid";
import { swPackageGrid } from "../../utils/language/swedish/swPackageGrid";

export const PackageGrid: React.FC = () => {
  const [language] = useRecoilState(userLanguage);
  const { status } = useRecoilValue(recoilFetch);

  const [{ noPackages, heading }, setLanguage] = useState(enPackageGrid[0]);

  useEffect(() => {
    if (language === "EN") {
      setLanguage(enPackageGrid[0]);
    } else {
      setLanguage(swPackageGrid[0]);
    }
  }, [setLanguage, language]);

  return (
    <div>
      {status === 200 && (
        <div>
          <h2>{heading}</h2>
          <PackageFilter />
        </div>
      )}
      {status === 204 && <h2>{noPackages}</h2>}
    </div>
  );
};
