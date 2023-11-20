import config from "../config";
import { House } from "../types/house";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import axios from "axios";

const useFetchHouses = () => {
    return useQuery<House[], AxiosError>("houses", () =>
    axios.get(`${config.baseApiUrl}/houses`).then(
        (rsp) => rsp.data));
};

const useFetchHouseDetails = (id: number) => {
    return useQuery<House, AxiosError>(["houses", id], () =>
    axios.get(`${config.baseApiUrl}/house/${id}`).then(
        (rsp) => rsp.data));
};

export default useFetchHouses;
export { useFetchHouseDetails };