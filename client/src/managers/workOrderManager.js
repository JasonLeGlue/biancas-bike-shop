import { tryGetLoggedInUser } from "./authManager.js";

const _apiUrl = "/api/workorder";

export const getIncompleteWorkOrders = () => {
  return fetch(_apiUrl + "/incomplete").then((res) => res.json());
};

export const createWorkOrder = (workOrder) => {
  return fetch(_apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(workOrder),
  }).then((res) => {
    if (res.status === 400) {
      return res.json();
    }
    return tryGetLoggedInUser();
  });
};

export const updateWOrkOrder = (workOrder) => {
  return fetch(`${_apiUrl}/${workOrder.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(workOrder),
  });
};

export const markWorkOrderComplete = (id) => {
  return fetch(`${_apiUrl}/${id}/complete`, {
    method: "POST",
  });
};

export const removeWorkOrder = (id) => {
  return fetch(`${_apiUrl}/${id}`, {
    method: "DELETE",
  });
};
