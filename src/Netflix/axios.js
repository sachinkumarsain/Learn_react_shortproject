import axios from "axios"
const full_url =axios.create({
    baseURL:"https://api.themoviedb.org/3/",
})
export default full_url