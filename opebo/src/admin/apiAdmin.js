import { API } from "../config";

//reading admin data
export const read = (adminId, token) => {
  return fetch(`${API}/admin/${adminId}`, {
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

//updating admin data
export const update = (adminId, token, admin) => {
  return fetch(`${API}/admin/${adminId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(admin),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateAdmin = (admin, next) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("jwt")) {
      let auth = JSON.parse(localStorage.getItem("jwt"));
      auth.admin = admin;
      localStorage.setItem("jwt", JSON.stringify(auth));
      next();
    }
  }
};

//<<------all the api related to Category ------>>
//api for creating category
export const createCategory = (adminId, token, category) => {
  return fetch(`${API}/category/create/${adminId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: category,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//api to get categories
export const getCategories = () => {
  return fetch(`${API}/categories?limit=undefined`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//api to get single category
export const getCategory = (categoryId) => {
  return fetch(`${API}/category/${categoryId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//api for updating category
export const updateCategory = (categoryId, adminId, token, category) => {
  return fetch(`${API}/category/${categoryId}/${adminId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: category,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//api for deleting Category
export const deleteCategory = (categoryId, adminId, token) => {
  return fetch(`${API}/category/${categoryId}/${adminId}`, {
    method: "DELETE",
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

//<<-------all the api related to Service -------->>
//api for creating Services
export const createService = (adminId, token, service) => {
  return fetch(`${API}/service/create/${adminId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: service,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//api to get Services
export const getServices = () => {
  return fetch(`${API}/services?limit=undefined`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//api to get single service
export const getService = (serviceId) => {
  return fetch(`${API}/service/${serviceId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//api for updating service
export const updateService = (serviceId, adminId, token, service) => {
  return fetch(`${API}/service/${serviceId}/${adminId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: service,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//api for deleting Service
export const deleteService = (serviceId, adminId, token) => {
  return fetch(`${API}/service/${serviceId}/${adminId}`, {
    method: "DELETE",
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

//<<-------all the api related to subService -------->>
//api for creating SubService
export const createSubService = (adminId, token, subService) => {
  return fetch(`${API}/subService/create/${adminId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: subService,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//api to get SubServices
export const getSubServices = () => {
  return fetch(`${API}/subServices?limit=undefined`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//api to get single subService
export const getSubService = (subServiceId) => {
  return fetch(`${API}/subService/${subServiceId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//api for updating service
export const updateSubService = (subServiceId, adminId, token, subService) => {
  return fetch(`${API}/subService/${subServiceId}/${adminId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: subService,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//api for deleting subService
export const deleteSubService = (subServiceId, adminId, token) => {
  return fetch(`${API}/subService/${subServiceId}/${adminId}`, {
    method: "DELETE",
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

//apu for fetching subService using serviceID

export const getSubServiceByServiceId = (serviceId) => {
  return fetch(`${API}/subService/${serviceId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
//<<-- all the order related apis are here -->>
//api for listing all the orders
// export const listOrders = (userId, token) => {
//   return fetch(`${API}/order/list/${userId}`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

//api to get status values as per changes in front-end
export const getStatusValues = (userId, token) => {
  return fetch(`${API}/order/status-values/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//api to update order status values as per changes
export const updateOrderStatus = (userId, token, orderId, status) => {
  return fetch(`${API}/order/${orderId}/status/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status, orderId }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getUsersOrders = (adminId, token) => {
  return fetch(`${API}/admin/order/list/${adminId}`, {
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
