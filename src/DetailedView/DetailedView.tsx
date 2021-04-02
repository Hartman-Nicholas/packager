import { ILinkProps } from "../shared/Interfaces/ILinkProps";
import { Map } from "../shared/GoogleMaps";

export const DetailedView: React.FC<ILinkProps> = (props: ILinkProps) => {
  const { data } = props.location.state.fromNotifications;

  const label = {
    Name: data.location_name,
    ParcelId: data.parcel_id,
    Status: data.status,
    Sender: data.sender,
  };

  return (
    <div>
      <header>Hi There</header>
      <Map
        lat={data.location_coordinate_latitude}
        lng={data.location_coordinate_longitude}
        label={label}
      />
    </div>
  );
};
