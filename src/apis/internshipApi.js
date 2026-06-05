import axios from "axios";

const API_URL =
  "https://internshala.com/hiring/search";

export const fetchInternships = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};