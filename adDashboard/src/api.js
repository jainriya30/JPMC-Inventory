import axios from "axios";

const apiUrl = "https://team-91.herokuapp.com/api/"
export const getProducts = async (region) => {
    try {
      
      const {data} = await axios.get(apiUrl + "inventory/getItems/" + region);
      
      if (data) {
          return (data);
      }
      
    } catch (err) {
      throw err;
    }
  }


  export const getDashboard = async (region) => {
    try {
      const {data} = await axios.get(apiUrl + "user/dashboard/" + region);
      
      if (data) {
          return (data);
      }
      
    } catch (err) {
      throw err;
    }
  }

  export const addProducts = async (region, formData) => {
    try {
      
      const {data} = await axios.put(apiUrl + "inventory/addItems/" + region, formData);
      
      if (data) {
          return (data);
      }
      
    } catch (err) {
      throw err;
    }
  }