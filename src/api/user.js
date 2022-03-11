import { basePath, apiVersion } from "./config";
// import axios from "axios";
export function signUpApi(data) {
  const url = `${basePath}/${apiVersion}/signUp`;

  const params = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(data), // body data type must match "Content-Type" header
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.user) {
        return { ok: true, message: "Usiario creado correctamente" };
      }
      return { ok: false, message: result.message };
    })
    .catch((err) => {
      return { ok: false, message: err.message };
    });

  // axios
  //   .post(url, data)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((result) => {
  //     if (result.user) {
  //       return result;
  //     }
  //     return false;
  //   })
  //   .catch((err) => {
  //     return false;
  //   });
}

export function signInApi(data) {
  const url = `${basePath}/${apiVersion}/signIn`;

  const params = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(data), // body data type must match "Content-Type" header
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    .then((result) => {
      /*if (result.user) {
        return { ok: true, message: "Usiario creado correctamente" };
      }
      return { ok: false, message: result.message };*/
      //console.log("result : " + JSON.stringify(result));
      return result;
    })
    .catch((err) => {
      return { ok: false, message: err.message };
    });
}
