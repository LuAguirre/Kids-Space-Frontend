/* import axios from "axios"; */
/* import { URL } from "../type"; */

export default {
  loginCredentials: (username, password) => {
    // return axios.post(`${URL}/auth`, { username, password });
    return new Promise((resolve) =>
      resolve({ name: "JC Bodoque", username, password })
    );
  },
};
