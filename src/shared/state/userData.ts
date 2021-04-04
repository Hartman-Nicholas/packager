import { atom } from "recoil";
import { IPackage } from "../Interfaces/IPackage";

export const userDataState = atom({
  key: "userData",
  default: [{}] as IPackage[],
});
