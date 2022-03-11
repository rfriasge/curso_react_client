// import { basePath, apiVersion } from "./config";
// import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constans";
// import jwtDecode from "jwt-decode";
// import { NULL } from "node-sass";

// export function getAccessToken() {
//   const accessToken = localStorage.getItem(ACCESS_TOKEN);

//   if (!accessToken || accessToken === "null") {
//     return null;
//   }
//   willExpireToken(accessToken);
//   return accessToken;
// }

// function willExpireToken(token) {
//   const secunds = 60;
//   const metaToken = jwtDecode(token);
//   console.log(metaToken);
// }
