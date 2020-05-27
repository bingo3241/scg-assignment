import axios from "axios"

export default {
  async solveEquation(a, aplusb, aminusc) {
    let res = await axios.get("http://localhost:8000/equation", {
      params: {
        a: a,
        aplusb: aplusb,
        aminusc: aminusc
      }
    })
    console.log(res.data)
    return res.data;
  }
}