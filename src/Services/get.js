import axios from "axios";
const postedJobs = [];
axios
  .get("http://localhost:5000/api")
  .then((res) => postedJobs.push(res.data))
  .catch((err) => err);


  export default postedJobs;
