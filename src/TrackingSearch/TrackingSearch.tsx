import { useRecoilState } from "recoil";
import { objectData } from "../State/objectData";

export const TrackingSearch: React.FC = () => {
  //Global State
  const [trackingData] = useRecoilState(objectData);

  console.log(trackingData);

  return (
    <div>
      <div>Tracking Map</div>
    </div>
  );
};
