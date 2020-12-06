import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-backend-mern.herokuapp.com",
});

export default instance;
