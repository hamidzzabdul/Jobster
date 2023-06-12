// imports

import { login, logout } from "./login";
import { addJob } from "./jobs";

// dashboard
const dashboard = document.querySelector(".nav-bar");
const hamburger = document.querySelector(".hamburger");
const logoutBtn = document.querySelector(".logout-btn");
const registerbtn = document.querySelector(".register");
const loginbtn = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const AddJobsForm = document.querySelector(".add-job-form");

if (dashboard) {
  hamburger.addEventListener("click", (e) => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("slide-in");
    const navBar = document.querySelector(".navigation");
    const mainSection = document.querySelector("main");

    if (navBar.classList.contains("sidebar-active")) {
      navBar.classList.remove("sidebar-active");
    } else {
      navBar.classList.add("sidebar-active");
    }
    mainSection.classList.toggle("side-active");
  });

  const dropdown = document.querySelector(".drop-down");
  let dropdownIsVisible = false;
  dropdown.addEventListener("click", (e) => {
    document.querySelector(".dropdown-item").style.visibility = "visible";
    if (!dropdownIsVisible) {
      document.querySelector(".dropdown-item").style.visibility = "visible";
      dropdownIsVisible = true;
    } else {
      document.querySelector(".dropdown-item").style.visibility = "hidden";
      dropdownIsVisible = false;
    }
  });

  //side menu items
  const currentURL = window.location.href;
  const sideMenu = document.querySelectorAll(".link-item");
  sideMenu.forEach((item) => {
    const link = item.getAttribute("href");
    if (currentURL.includes(link)) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

const getRegisterPage = () => {
  const renderedPage = document.querySelectorAll("main");
  renderedPage.forEach((page) => {
    if (page.classList.contains("inactive")) {
      page.classList.remove("inactive");
    } else {
      page.classList.add("inactive");
    }
  });
};

if (loginbtn) {
  loginbtn.addEventListener("click", getRegisterPage);
}

if (registerbtn) {
  registerbtn.addEventListener("click", getRegisterPage);
}

const alertContainer = document.querySelector(".alert-container");
const line = document.querySelector(".line");

if (alertContainer) {
  setTimeout(() => {
    line.style.animation = ""; // Remove the animation
    line.style.display = "none";
  }, 4000);
  line.style.display = "block";
}

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", logout);
}

if (AddJobsForm) {
  AddJobsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const post = document.getElementById("post").value;
    const companyName = document.getElementById("company").value;
    const city = document.getElementById("city").value;
    const status = document.querySelector("select[name='status']").value;
    const jobType = document.querySelector("select[name='type']").value;
    const description = document.getElementById("description").value;

    addJob(post, companyName, city, status, jobType, description);
  });
}
