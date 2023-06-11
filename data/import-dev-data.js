const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs  = require('fs');
const Job = require("../models/jobModel");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connected Sucessfully"));

  const Jobs = JSON.parse(fs.readFileSync('./data/api.json', 'utf-8'))

  const deleteJson = async()=> {
    try {
        await Job.deleteMany()
        console.log('Data sucessfully deleted')
    } catch (error) {
        console.log(error.message)
    }
  }
  const importJson = async()=> {
    try {
        await Job.create(Jobs)
        console.log('Data sucessfully imported')
    } catch (error) {
        console.log(error.message)
    }
  }

  if(process.argv[2] === '--import'){
    importJson()
  }

  if(process.argv[2] === '--delete'){
    deleteJson()
  }
