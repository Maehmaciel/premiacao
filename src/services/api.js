import axios from "axios";

const api = axios.create({
  baseURL: "https://concurso-api.herokuapp.com/",
  //https://concurso-api.herokuapp.com/
});

export default api;
