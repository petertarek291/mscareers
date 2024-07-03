import axios from "axios";

const service =  ()=> axios
  .get("http://localhost:5000/api")
  .then((res) => res.data)


  export default service;
