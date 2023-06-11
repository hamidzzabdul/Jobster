exports.getLandingPage = async (req, res) => {
  try {
    res.status(200).render("overview", {
      title: "overview",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getLoginPage = async (req, res) => {
  try {
    res.status(200).render("login", {
      title: "login",
    });
  } catch (error) {
    console.log(error);
  }
};


// dashboard
exports.getStats = async (req, res) => {
  try {
      res.status(200).render("partials/stats",{
          title: "stats",
        },
      );
  } catch (error) {
    console.log(error);
  }
};
exports.getAllJobs = async (req, res) => {
  try {
      res.status(200).render("partials/alljobs", {
        title: "alljobs",
      });
  } catch (error) {
    console.log(error);
  }
};
exports.getAddJobs = async (req, res) => {
  try {
      res.status(200).render("partials/addjobs", {
        title: "addjobs",
      });
  } catch (error) {
    console.log(error);
  }
};
exports.getme = async (req, res) => {
  try {
      res.status(200).render("partials/profile", {
        title: "user-profile",
      });
  } catch (error) {
    console.log(error);
  }
};
