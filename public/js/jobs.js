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

export const deleteJobs = async (jobId) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/v1/jobs/${jobId}`,
    });

    if (res.status === 204) {
      console.log("deleted succesfully");
      showAlert("success", "Job deleted");
      location.reload(true);
    }
  } catch (error) {
    console.log(error.message);
    showAlert("error", error);
  }
};

export const updateJob = async (
  jobId,
  post,
  companyName,
  city,
  status,
  jobType
) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `/api/v1/jobs/${jobId}`,
      data: {
        post,
        companyName,
        city,
        status,
        jobType,
      },
    });

    if (res.data.status === "Successful") {
      console.log("update succesfull");
      showAlert("success", "update successfull");
      location.reload(true);
    }
  } catch (error) {
    showAlert("error", error.message);
  }
};
