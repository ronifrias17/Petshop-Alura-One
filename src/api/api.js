import axios from "axios";

export const api = axios.create({
    baseURL: "https://pet-shop-api-pi.vercel.app/",
});

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url);
    setData(respuesta.data);
};
