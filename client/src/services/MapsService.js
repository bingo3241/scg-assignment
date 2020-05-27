import axios from "axios"

export default {
  async getRoute() {
    await axios.get("http://localhost:8000/maps").then(res => {  
        console.log(res.data) 
        return res.data;
    })
}

    
  
}