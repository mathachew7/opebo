import { API } from "../../config";

export const adminSignup = (admin) => {
  return fetch(`${API}/adminSignup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(admin),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const adminSignin = (admin) => {
  return fetch(`${API}/adminSignIn`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(admin),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("adminJwt", JSON.stringify(data));
    next();
  }
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("adminJwt");
    next();
    return fetch(`${API}/signout`, {
      method: "GET",
    })
      .then((response) => {
        console.log("signout", response);
      })
      .catch((err) => console.log(err));
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("adminJwt")) {
    return JSON.parse(localStorage.getItem("adminJwt"));
  } else {
    return false;
  }
};
