import axios from "axios";


axios.defaults.baseURL = "https://64340c87582420e23172721e.mockapi.io/contacts";
const fetchContacts = () => async dispatch => {
  try {
    const response = await axios.get("/tasks");
  } catch (e) {}
};