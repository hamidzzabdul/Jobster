const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

const AppError = require('./utils/appError')
const globalErrorHandler = require("./controllers/errorController");
const jobRouter = require("./routes/jobRoutes");
const userRouter = require("./routes/userRoutes");
const viewRouter = require("./routes/viewRouter");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// serving static files
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(express.static("css"));

// rendering with pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// routes
app.use("/", viewRouter);

app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
