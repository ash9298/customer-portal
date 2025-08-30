import api from "./index";

export const checkCustomer = async () => {
  try {
    const response = await api.get("/check_customer");
    return response.data;
  } catch (error) {
    console.error("Error fetching check customer:", error);
    throw error;
  }
};

export const getAllLicenses = async () => {
  try {
    const response = await api.get("/all_licenses");
    return response.data;
  } catch (error) {
    console.error("Error fetching licenses:", error);
    throw error;
  }
};

export const getMachineInfo = async (id: number) => {
  try {
    const response = await api.get("/machine_info", {
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
    const response = await api.get("/product_info", {
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
