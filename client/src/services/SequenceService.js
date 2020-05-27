import axios from "axios"

export default {
  async solveSequence() {
    let res = await axios.get("http://localhost:8000/sequence")
    console.log(res.data)
    return res.data;
  }
}