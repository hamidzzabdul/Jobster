import axios from "axios";
import { showAlert } from "./alert";

export const addJob = async (
  post,
  companyName,
  city,
  status,
  jobType,
  description
) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/jobs",
      data: {
        post,
        companyName,
        city,
        status,
        jobType,
        description,
      },
    });

    if (res.data.status === "Success") {
      showAlert("success", "Job created successfully");
      console.log("successfully created");
    }
  } catch (error) {
    showAlert("error", "Please make sure all the fields are filled");
  }
};
