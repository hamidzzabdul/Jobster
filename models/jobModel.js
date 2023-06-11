const mongoose  = require('mongoose')
const slugify = require('slugify');


const  JobSchema = new mongoose.Schema({
    post: {
        type: String,
        required: [true, 'please enter a job post'],
        trim: true
    },
    companyName: {
        type: String,
        required: [true, 'please enter your company name'],
        trim: true,
    },
    city:{
        type:String,
        required: [true, 'please add your city/county'],
    },
    status:{
        type:String,
        required:[true, 'Please enter the jobs status'],
        trim: true, 
    },
    jobType:{
        type: String,
        trim: true,
        required:[true, 'Please enter the Job type'],
    },
    description:{
        type: String,
        required: [true, "Please tell us about the jobs"],
        trim: true,
    }

})



JobSchema.pre('save', function(next) {
    this.slug = slugify(this.post, { lower: true });
    next();
  });


const Job = mongoose.model("Job", JobSchema)

module.exports = Job;