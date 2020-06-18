import { API } from "../config";

export const signup = (user) => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signin = (user) => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signinWithPhone = (phone) => {
  return fetch(`${API}/signInPhone`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(phone),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const otpVerify = (req, res, next) => {
  if (typeof window !== "undefined") {
    const userInput = req.otp;
    const a = JSON.parse(localStorage.getItem("otp"));
    const { token, user } = JSON.parse(localStorage.getItem("otp"));
    const phone = user.phone;
    return fetch(`${API}/verifyOtp`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput, token, phone }),
    })
      .then((response) => {
        localStorage.removeItem("otp");
        return response.json();
      })
      .catch((err) => {
        return res.status(400).json({
          error: "OTP Not generated Yet",
        });
      });
  }
};

export const authenticOtp = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("otp", JSON.stringify(data));
    next();
  }
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
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
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const verify = (token) => {
  return fetch(`${API}/userVerify/${token}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(),
  })
    .then((response) => {
      return response.json(true);
    })
    .catch((err) => {
      console.log(err);
    });
};

//contact Us api
export const createContactUs = (data) => {
  return fetch(`${API}/contact`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//subscribe Us api
export const createSubscribeUs = (data) => {
  return fetch(`${API}/subscribe`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
