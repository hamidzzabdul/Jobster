import axios from "axios";
import { showAlert } from "./alert";

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/login",
      data: {
        email,
        password,
      },
    });
    if (res.data.status === "Success") {
      showAlert("success", "Logged in Successfully");
      window.setTimeout(() => {
        location.assign("/dashboard/stats");
      }, 4000);
    }
  } catch (error) {
    showAlert("error", error.response.data.message);
  }
};

export const signUp = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === "Success") {
      console.log("created succesfully");
      showAlert("success", "Account created successfully");
      window.setTimeout(() => {
        location.assign("/dashboard/stats");
      }, 4000);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/api/v1/users/logout",
    });
    if (res.data.status === "Success") location.assign("/");
  } catch (error) {
    console.log(error.message);
  }
};
