import axios from "axios";

export const fetchData = async () => {
  const res = await axios
    .get("https://my.api.mockaroo.com/orders.json?key=e49e6840", {
      timeout: 8000,
    })
    .catch((error) => error.response);

  return res;
};
