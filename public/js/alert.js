export const hideAlert = () => {
  const el = document.querySelector(".alert-container");
  if (el) {
    setTimeout(() => {
      el.classList.remove("active");
      el.addEventListener("transitionend", () => {
        el.parentNode.removeChild(el);
      });
    }, 3000);
  }
};

export const showAlert = (type, msg, time = 2) => {
  hideAlert();
  const markup = `
  <div class="alert-container">
  <svg class="close" aria-hidden="true" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"></path></svg>
    <div class="alert ${type}">
        <svg viewBox="0 0 24 24" width="100%" height="100%" fill="var(--toastify-icon-color-success)"><path d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"></path></svg>
        <p>${msg}</p>
    </div>
    <div class="line ${type}"></div>
    </div>`;

  document.querySelector("body").insertAdjacentHTML("afterbegin", markup);

  setTimeout(() => {
    document.querySelector(".alert-container").classList.add("active");
  }, 100);
  document.querySelector(".alert-container").classList.remove("active");
  window.setTimeout(hideAlert, time * 1000);
};
