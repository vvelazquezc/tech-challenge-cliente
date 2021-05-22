import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const service = {
  signOut: async (token) => {
    const {
      data: { data: user },
    } = await axios.post(
      `${baseURL}/user/sign-out`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return user;
  },
  signUp: async (token, username) => {
    const {
      data: { data: user },
    } = await axios.post(
      `${baseURL}/user/sign-up`,
      { username },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return user;
  },
};

export default service;
