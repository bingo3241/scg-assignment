import axios from "axios"

export default {
  async solveEquation(a, aplusb, aplusc) {
    let res = await axios.get("http://localhost:8000/equation", {
      params: {
        a: a,
        aplusb: aplusb,
        aplusc: aplusc
      }
    })
    console.log(res.data)
    return res.data;
  }
}