import axios from "axios";

export const getAllUsers = async () => {
    const response = await axios.get("http://192.168.1.68:3004/admin/v1/axe");
    return response.data;
  };