import axios from "axios";
const recomendedCandidate = [];
axios
  .post("http://localhost:5000/api",{

  })
  .then((res) => recomendedCandidate.push(res.data))
  .catch((err) => err);


  console.log(postedJobs)
  export default postedJobs;
