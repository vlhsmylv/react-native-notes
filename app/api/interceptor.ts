import axios from "axios";

// Create an instance of axios
const apiClient = axios.create({
  baseURL: "http://localhost:8082/api",
});

// Add a request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // You can modify the request config here if needed
    console.log("Request sent to:", config.url);
    return config;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // You can modify the response here if needed
    return response;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

export default apiClient;
