const _apiUrl = "/api/userprofile";

export const getMechanics = () => {
  return fetch(_apiUrl + "/mechanics").then((res) => res.json());
};
