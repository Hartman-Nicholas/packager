export interface IPackage {
  id: number;
  status: string;
  eta: string;
  parcel_id: string;
  sender: string;
  verification_required: boolean;
  location_id: string;
  location_name: string;
  location_coordinate_latitude: number;
  location_coordinate_longitude: number;
  location_status_ok: boolean;
  user_phone: string;
  user_name: string;
  notes: string | null;
  last_updated: string;
}
