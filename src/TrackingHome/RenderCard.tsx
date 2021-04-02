import { IPackage } from "../shared/Interfaces/IPackage";
import { Link } from "react-router-dom";

export const RenderCard: React.FC<{ data: IPackage[] }> = ({ data }) => {
  const Render: any = data.map((data: IPackage) => {
    return (
      <div key={data.id}>
        <Link
          to={{
            pathname: "./DetailedView",
            state: {
              fromNotifications: { data },
            },
          }}
        >
          <i className="fas fa-parachute-box">View</i>
        </Link>
        <div>Parcel Id: {data.parcel_id}</div>
        <div>Sender: {data.sender}</div>
        <div>Status: {data.status}</div>
      </div>
    );
  });

  return Render;
};
