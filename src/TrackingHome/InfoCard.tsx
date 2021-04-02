import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { objectData } from "../State/objectData";
import { fetchData } from "./fetchData";
import { ErrorMessage } from "../shared/ErrorMessage";
import { RenderCard } from "./RenderCard";
import { backupData } from "./orders";

export const InfoCard: React.FC = () => {
  const [trackingData, setData] = useRecoilState(objectData);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    fetchData().then((response) => {
      switch (response.status) {
        case 200:
          setData(response.data);
          setStatus(response.status);
          break;
        default:
          setStatus(response.status);
          break;
      }
    });
  }, [setData, setStatus]);

  if (status >= 400) {
    setData(backupData);
    setStatus(200);
  }

  return (
    <div>
      <h1>Package Tracking Grid</h1>
      {status === 0 && <div>Loading....</div>}
      {status === 200 && <RenderCard data={trackingData} />}
      {status === 204 && <div>You have no packages to Track</div>}
      {status >= 400 && (
        <div>
          {" "}
          <ErrorMessage status={status} />{" "}
        </div>
      )}
    </div>
  );
};
