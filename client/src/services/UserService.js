import axios from "axios";

export const axiosJWT = axios.create();

export const loginUser = async (data) => {
  try {
    const res = await axios.post('http://localhost:5000/api/user/login', data, {
      withCredentials: true
    });
    return res.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // Ném lỗi để xử lý ở phía calling function (nếu cần)
  }
};

export const getDetailsUser = async (id, access_token) => {
  try {
    const res = await axiosJWT.get(`http://localhost:5000/api/user/get-details/${id}`, {
      headers: {
        tokenheader: `Bearer ${access_token}`
      },
      withCredentials: true
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error; // Ném lỗi để xử lý ở phía calling function (nếu cần)
  }
};

export const refreshToken = async () => {
  try {
    const res = await axios.post('http://localhost:5000/api/user/refresh-token', null, {
      withCredentials: true
    });
    return res.data;
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error; // Ném lỗi để xử lý ở phía calling function (nếu cần)
  }
};

export const logoutUser = async () => {
  try {
    const res = await axios.post(`http://localhost:5000/api/user/log-out`, null, {
      withCredentials: true
    });
    return res.data;
  } catch (error) {
    console.error("Error logging out:", error);
    throw error; // Ném lỗi để xử lý ở phía calling function (nếu cần)
  }
};
