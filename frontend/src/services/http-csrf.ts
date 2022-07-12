import axios from "axios";
import getCookie from "./getCookie";

export default axios.create({
  // baseURL: "http://127.0.0.1:8000",
  baseURL: "https://quicktures.herokuapp.com",
  headers: {
    "Content-type": "application/json",
    "X-CSRFToken": getCookie("csrftoken"),
  },
});
