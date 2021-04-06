import { selector } from "recoil";
import axios from "axios";
import { userDataState } from "../state/userData";
import { backupData } from "../../utils/backupData";

export const recoilFetch = selector({
  key: "data",
  get: async ({ get }) => {
    get(userDataState);

    const userData = await axios
      .get("https://my.api.mockaroo.com/orders.json?key=e49e6840")
      .then((response) => response);

    if (userData.status >= 400) {
      return { status: 200, data: backupData };
    }

    return userData;
  },
});
