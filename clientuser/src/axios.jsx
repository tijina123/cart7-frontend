import axios from "axios";

export const BASE_URL = "http://localhost:3000/";
export const MEDIA_URL = "";

export default axios.create({
    baseURL: BASE_URL,
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });
  
  export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    // headers: {
    //   "Content-Type": "application/json",
    // },
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    // }
  });

  // export const axiosPrivate = axios.create({
  //   baseURL: BASE_URL,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //   }
  // });