// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://127.0.0.1:8000", // ✅ your actual API base URL
//   withCredentials: true,
//   // withXSRFToken: true,
// });

// export default api;
import axios from "axios";
import { toast } from "sonner";

const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  withXSRFToken: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const message = error?.response?.data?.message || "Something went wrong";
    console.log(message);
    if (status === 401) {
      toast.error("Unauthorized. Please log in again.");
    } else if (status === 403) {
      toast.error("You do not have permission to perform this action.");
    } else if (status === 409) {
      toast.error(message); // e.g., "You already have an active loan."
    } else if (status === 422) {
      // const errors = error.response.data.errors;
      const errors = error.response?.data;
      // console.log(errors);
      if (errors) {
        const firstError = Object.values(errors)[0][0];
        toast.error(firstError);
      } else {
        toast.error(message);
      }
    } else if (status === 500) {
      toast.error(
        message ? message : "A server error occurred. Please try again later."
      );
    } else {
      toast.error(message);
    }

    return Promise.reject(error); // allow local catch if needed
  }
);

export default apiClient;
