import axios from "axios"


export const loginUser = async (data) => {
    const res = await axios.post('http://localhost:5000/api/user/login', data)
    return res.data
}