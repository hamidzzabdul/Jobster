// imports

import { login, logout } from "./login";
import { addJob, deleteJobs, updateJob } from "./jobs";

// dashboard
const dashboard = document.querySelector(".nav-bar");
const hamburger = document.querySelector(".hamburger");
const logoutBtn = document.querySelector(".logout-btn");
const registerbtn = document.querySelector(".register");
const loginbtn = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const AddJobsForm = document.querySelector(".add-job-form");
const overlay = document.querySelector(".overlay");
const jobForms = document.querySelectorAll(".job-wrapper");
const alertContainer = document.querySelector(".alert-container");
const editForm = document.querySelector(".edit-job-form");

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
      description.value
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

const closePopUp = () => {
  overlay.addEventListener("click", (e) => {
    overlay.style.display = "none";
    editForm.classList.add("inactive");
  });
};

if (jobForms) {
  console.log("hello world");
  jobForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      const jobId = form.dataset.jobid;
      e.preventDefault();
      deleteJobs(jobId);
    });
  });
  const editBtn = document.querySelectorAll(".edit-popup");
  const position = document.querySelector(".job-post").textContent;
  const name = document.querySelector(".company-name").textContent;
  const location = document.querySelector(".location").textContent;
  const type = document.querySelector(".type").textContent;
  const jobStatus = document.querySelector(".status").textContent;

  editBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const jobId = btn.dataset.jobid;
      editForm.classList.remove("inactive");
      overlay.style.display = "block";
      let post = document.getElementById("post");
      let companyName = document.getElementById("company");
      let city = document.getElementById("city");
      let status = document.querySelector("select[name='status']");
      let jobType = document.querySelector("select[name='type']");
      // let description = document.getElementById("description");

      post.value = position;
      companyName.value = name;
      city.value = location;
      status.selectedIndex = jobStatus;
      jobType.selectedIndex = type;

      // onsubmit
      editForm.addEventListener("submit", (e) => {
        e.preventDefault();
        updateJob(
          jobId,
          post.value,
          companyName.value,
          city.value,
          status.value,
          jobType.value
        );
        setTimeout(() => {
          closePopUp();
        }, 3000);
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
    });
  });
  closePopUp();
}
