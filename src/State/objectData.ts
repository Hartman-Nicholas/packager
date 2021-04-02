import { atom } from "recoil";
import { IPackage } from "../shared/Interfaces/IPackage";

export const objectData = atom({
  key: "objectData",
  default: [{}] as IPackage[],
});
