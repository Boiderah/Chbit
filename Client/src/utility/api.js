import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/",
});


export const apiConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export default api;
