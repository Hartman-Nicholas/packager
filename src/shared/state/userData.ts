import { atom } from "recoil";
import { IPackage } from "../../types/Interfaces/IPackage";

export const userDataState = atom({
  key: "userData",
  default: [{}] as IPackage[],
});
