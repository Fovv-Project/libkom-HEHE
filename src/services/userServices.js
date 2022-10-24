import { API_URL_USER } from './const';

export const getUser = (token, email) => {
  var url = new URL(API_URL_USER);
  var params = {
    nim: email.substring(0, email.indexOf('@')),
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  return fetch(url, {
    headers: { Authentication: 'Bearer Token ' + token },
  });
};
