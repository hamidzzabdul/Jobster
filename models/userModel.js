const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
      min: 8,
      trim: true,
    },
    lastname: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      required: [true, "Please enter a valid email"],
      uniqe: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
      trim: true,
    },
    role: {
      type: String,
      enum: ["admin", "recruiter", "user"],
      default: "user",
    },
    password: {
      type: String,
      required: [true, "Please enter a Password"],
      min: 8,
      max: 255,
      trim: true,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please enter a Password"],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "Passwords are not the same",
      },
      trim: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
