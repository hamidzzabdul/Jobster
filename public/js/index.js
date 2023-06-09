// imports

import { login, logout, signUp } from "./login";
import { addJob, apply, deleteJobs, updateJob } from "./jobs";
import { becomeRecruiter } from "./user";
// dashboard
const dashboard = document.querySelector(".nav-bar");
const hamburger = document.querySelector(".hamburger");
const logoutBtn = document.querySelector(".logout-btn");
const registerbtn = document.querySelector(".register");
const loginbtn = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
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

  const recruiterBtn = document.querySelector(".become-recruiter");
  if (recruiterBtn) {
    recruiterBtn.addEventListener("click", () => {
      const userId = recruiterBtn.dataset.userid;
      becomeRecruiter(userId);
    });
  }

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
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const passwordConfirm = document.getElementById(
      "signup-passwordConfirm"
    ).value;
    signUp(name, email, password, passwordConfirm);
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
    const userId = AddJobsForm.dataset.userid;
    addJob(
      post.value,
      companyName.value,
      city.value,
      status.value,
      jobType.value,
      description.value,
      userId
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

if (jobForms) {
  jobForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      const jobId = form.dataset.jobid;
      e.preventDefault();
      deleteJobs(jobId);
    });
  });
  const editBtn = document.querySelectorAll(".edit");

  editBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const jobId = btn.dataset.jobid;
      editForm.classList.remove("inactive");
      overlay.style.display = "block";

      const jobWrapper = document.querySelector(`[data-jobid="${jobId}"]`);
      const position = jobWrapper.querySelector(".job-post").textContent;
      const name = jobWrapper.querySelector(".company-name").textContent;
      const location = jobWrapper.querySelector(".location").textContent;
      const type = jobWrapper.querySelector(".type").value;
      const jobStatus = jobWrapper.querySelector(".status").value;

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
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      overlay.style.display = "none";
      editForm.classList.add("inactive");
    });
  }
}

// get job page

const job = document.querySelector(".job-container");
const bgOverlay = document.querySelector(".bg-overlay");

if (job) {
  const applyModal = document.querySelector(".apply-for-job");
  const applyBtn = document.querySelector(".apply");
  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      applyModal.classList.remove("inactive");
      bgOverlay.style.display = "block";
    });
  }

  if (bgOverlay) {
    bgOverlay.addEventListener("click", (e) => {
      bgOverlay.style.display = "none";
      applyModal.classList.add("inactive");
    });
  }
}

// Searching

const allJobsPage = document.querySelector(".all-jobs-container");
const jobsContainer = document.querySelector("#jobs-container");
if (allJobsPage) {
  const numOfJobs = document.querySelector("#numJobs");
  const searchBar = document.querySelector("#search");
  const loading = document.querySelector(".loading");
  searchBar.addEventListener("input", () => {
    const searchQuery = searchBar.value.toLowerCase();
    const jobs = Array.from(jobsContainer.querySelectorAll(".job-wrapper"));
    let count = 0;
    loading.style.display = "block";
    jobsContainer.style.display = "none";
    setTimeout(() => {
      jobsContainer.style.display = "";
      jobs.forEach((job) => {
        const title = job.querySelector(".job-post").textContent.toLowerCase();
        const companyName = job
          .querySelector(".company-name")
          .textContent.toLowerCase();
        if (title.includes(searchQuery) || companyName.includes(searchQuery)) {
          job.style.display = ""; // Show the job
          count++;
        } else {
          job.style.display = "none"; // Hide the job
        }
      });

      loading.style.display = "none";
      numOfJobs.textContent = `${count}`;
      if (numOfJobs.textContent === "0") {
        const alert = document.createElement("p");
        alert.textContent = "No jobs found with that name";
        const existingAlerts = jobsContainer.querySelectorAll(".alert");
        existingAlerts.forEach((existingAlert) => {
          existingAlert.remove();
        });

        alert.classList.add("alert"); // Add a class to the alert element for styling purposes
        jobsContainer.appendChild(alert);
      } else {
        const existingAlerts = jobsContainer.querySelectorAll(".alert");
        existingAlerts.forEach((existingAlert) => {
          existingAlert.remove();
        });
      }
    }, 800);
  });
}

// application form

const applicationForm = document.querySelector(".apply-for-job");

if (applicationForm) {
  applicationForm.addEventListener("submit", (e) => {
    const jobContainer = document.querySelector(".job-container");
    e.preventDefault();
    const jobId = jobContainer.dataset.jobid;
    const userId = jobContainer.dataset.userid;
    console.log(jobId, userId);
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone").value;
    const resumeFile = document.getElementById("resume").files[0];
    apply(name, email, phoneNumber, resumeFile, jobId, userId);
  });
}
