import { API_URL_USER } from "./const";

export const getUser = (token, email) => {
  var nim = email.substring(0, email.indexOf("@"));
  var url = new URL(API_URL_USER + nim);
  return fetch(url, {
    headers: { Authentication: "Bearer Token " + token },
  });
};
