import axios from "axios"

export const axiosJWT = axios.create()

export const loginUser = async (data) => {
    const res = await axios.post(`http://localhost:5000/api/user/login`, data)
    return res.data
}

export const getDetailsUser = async (id, access_token) => {
    const res = await axiosJWT.get(`http://localhost:5000/api/user/get-details/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const refreshToken = async () => {
      const res = await axios.post('http://localhost:5000/api/user/refresh-token', null, {
        withCredentials: true,
      });
      return res.data;
};

export const logoutUser = async () => {
    const res = await axios.post(`http://localhost:5000/api/user/log-out`, null, {
      withCredentials: true, // Đảm bảo rằng cookie được bao gồm trong yêu cầu
    });
    return res.data;
};