import { IPackage } from "./IPackage";

export interface ILinkProps {
  location: { state: { fromNotifications: { data: IPackage } } };
}
