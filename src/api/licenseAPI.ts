import axios from "axios";

export const checkCustomer = async () => {
  try {
    const response = await axios.get("http://localhost:3000/check_customer");
    return response.data;
  } catch (error) {
    console.error("Error fetching check customer:", error);
    throw error;
  }
};

export const getAllLicenses = async () => {
  try {
    const response = await axios.get("http://localhost:3000/all_licenses");
    return response.data;
  } catch (error) {
    console.error("Error fetching licenses:", error);
    throw error;
  }
};

export const getMachineInfo = async (id: number) => {
  try {
    const response = await axios.get("http://localhost:3000/machine_info", {
      params: {
        device_id: id,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching machine info:", error);
    throw error;
  }
};

export const getProductInfo = async (id: number) => {
  try {
    const response = await axios.get("http://localhost:3000/product_info", {
      params: {
        product_id: id,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching product info:", error);
    throw error;
  }
};
