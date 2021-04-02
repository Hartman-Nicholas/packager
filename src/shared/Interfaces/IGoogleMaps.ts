export interface IGoogleMaps {
  lat: number;
  lng: number;
  label: {
    Name: string;
    ParcelId: string;
    Status: string;
    Sender: string;
  };
}
