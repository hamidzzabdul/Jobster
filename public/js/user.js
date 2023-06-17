import axios from "axios";
import { showAlert } from "./alert";

export const becomeRecruiter = async (userId) => {
  try {
    const res = await axios({
      method: "PUT",
      url: `/api/v1/users/${userId}`,
    });
    if (res.data.status === "success") {
      showAlert("success", "you are now a recruiter");
      setTimeout(() => {
        location.reload(true);
      }, 2000);
    }
  } catch (error) {
    showAlert("error", "Sorry!! Something went wrong");
  }
};
