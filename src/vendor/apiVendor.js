import { API } from "../config";

export const vendorSignup = (vendor) => {
  return fetch(`${API}/vendorSignup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vendor),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateVendorDocument = (vendorId, token, vendor) => {
  return fetch(`${API}/vendor/updateDocument/${vendorId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: vendor,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const vendorSignin = (vendor) => {
  return fetch(`${API}/vendorSignIn`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vendor),
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
    localStorage.setItem("jwtVendor", JSON.stringify(data));
    next();
  }
};
export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwtVendor");
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
  if (localStorage.getItem("jwtVendor")) {
    return JSON.parse(localStorage.getItem("jwtVendor"));
  } else {
    return false;
  }
};

export const read = (vendorId, token) => {
  return fetch(`${API}/vendor/${vendorId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const update = (vendorId, token, vendor) => {
  return fetch(`${API}/vendor/${vendorId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(vendor),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateVendor = (vendor, next) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("jwtVendor")) {
      let auth = JSON.parse(localStorage.getItem("jwtVendor"));
      auth.vendor = vendor;
      localStorage.setItem("jwtVendor", JSON.stringify(auth));
      next();
    }
  }
};

export const addVendorAddress = (vendorId, token, address) => {
  return fetch(`${API}/vendor/addAddress/${vendorId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: address,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
