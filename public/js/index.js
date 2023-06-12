// imports

import { login, logout } from "./login";
import { addJob, deleteJobs } from "./jobs";

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

if (alertContainer) {
  const line = document.querySelector(".line");
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
  let post = document.getElementById("post");
  let companyName = document.getElementById("company");
  let city = document.getElementById("city");
  let status = document.querySelector("select[name='status']");
  let jobType = document.querySelector("select[name='type']");
  let description = document.getElementById("description");
  AddJobsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addJob(
      post.value,
      companyName.value,
      city.value,
      status.value,
      jobType.value,
      description
    );
  });
  const clearbtn = document.querySelector(".clear-btn");
  clearbtn.addEventListener("click", (e) => {
    post.value = "";
    companyName.value = "";
    city.value = "";
    status.selectedIndex = 0;
    jobType.selectedIndex = 0;
    description.value = "";
  });
}

const jobForms = document.querySelectorAll(".job-wrapper");
if (jobForms) {
  jobForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      const jobId = form.dataset.jobid;
      e.preventDefault();
      deleteJobs(jobId);
    });
  });
}
