import { withConfirm } from "antd/es/modal/confirm";
import axios, { HeadersDefaults } from "axios";
import { Token } from "typescript";
import { history } from "..";
// import {history} from '../index';
export const config = {
  setCookie: (name: string, value: string, days: number) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  getCookie: (name: string) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  delCookie: (name: string) => {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  },
  getStore: (name: string) => {
    if (localStorage.getItem(name)) {
      return localStorage.getItem(name);
    }
    return null;
  },
  setStore: (name: string, value: any) => {
    localStorage.setItem(name, value);
  },
  delStore: (name: string) => {
    localStorage.removeItem(name);
  },
  setStoreJson: (name: string, value: any) => {
    let json = JSON.stringify(value);
    localStorage.setItem(name, json);
  },
  getStoreJson: (name: string) => {
    if (localStorage.getItem(name)) {
      let result: any = localStorage.getItem(name);
      return JSON.parse(result);
    }
    return null;
  },
  ACCESS_TOKEN: "accessToken",
  USER_LOGIN: "userLogin",
};

export const {
  setCookie,
  getCookie,
  delCookie,
  getStore,
  setStore,
  delStore,
  setStoreJson,
  getStoreJson,
  ACCESS_TOKEN,
  USER_LOGIN,
} = config;

const DOMAIN = "https://elearningnew.cybersoft.edu.vn/api";
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNUUiLCJIZXRIYW5TdHJpbmciOiIwNy8wNi8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODYwOTYwMDAwMDAiLCJuYmYiOjE2NTczODYwMDAsImV4cCI6MTY4NjI0MzYwMH0.XsCcIZvawxcwye8KVYB2vJK4d3Gbr1XROtNyAL8nypA";

/* C???u h??nh request cho t???t c??? api - response cho t???t c??? k???t qu??? t??? api tr??? v??? */

//C???u h??nh domain g???i ??i
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});
//C???u h??nh request header

http.interceptors.request.use(
  (config: any) => {
    const token = getCookie(ACCESS_TOKEN);
    config.headers = {
      ...config.headers,
      ["Authorization"]: `Bearer ${token}`,
      ["TokenCybersoft"]: TOKEN_CYBERSOFT,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
//C???u h??nh k???t qu??? tr??? v???
const currentPath = window.location.pathname;
http.interceptors.response.use(
  (response) => {
    // console.log(response);

    return response;
  },
  (err) => {
    // const originalRequest = error.config;
    if (err.response.status === 500) {
      return Promise.reject(err);
    }
    if (err.response.status === 400 || err.response.status === 404) {
      // history.push('/');
      return Promise.reject(err);
    }
    if (err.response.status === 401 || err.response.status === 403) {
      // history.push("/");
      return Promise.reject(err);
    }
  }
);
/**
 * status code
 * 400: Tham s??? g???i l??n kh??ng h???p l??? => k???t qu??? kh??ng t??m ???????c (Badrequest);
 * 404: Tham s??? g???i l??n h???p l??? nh??ng kh??ng t??m th???y => C?? th??? b??? xo?? r???i (Not found) ...
 * 200: Th??nh c??ng, OK
 * 201: ???? ???????c t???o th??nh c??ng => (M??nh ???? t???o r???i sau ???? request ti???p th?? s??? tr??? 201) (Created)
 * 401: Kh??ng c?? quy???n truy c???p v??o api ???? (Unauthorize - C?? th??? do token kh??ng h???p l??? ho???c b??? admin ch???n )
 * 403: Ch??a ????? quy???n truy c???p v??o api ???? (Forbiden - token h???p l??? tuy nhi??n token ???? ch??a ????? quy???n truy c???p v??o api)
 * 500: L???i x???y ra t???i server (Nguy??n nh??n c?? th??? frontend g???i d??? li???u kh??ng h???p l??? => backend trong qu?? tr??nh x??? l?? code g??y ra l???i ho???c do backend code b??? l???i => Error in server )
 */
