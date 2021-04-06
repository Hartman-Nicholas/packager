import { IPackage } from "./IPackage";

export interface ILinkProps {
  location: { state: { fromNotifications: { data: IPackage } } };
  history: { goBack: Function };
}
