import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

/* ============================
   REGISTER ROUTE
   ============================ */
router.post(
  "/register",
  [
    body("first_name").notEmpty().withMessage("First name is required"),
    body("last_name").notEmpty().withMessage("Last name is required"),
    body("email_id").isEmail().withMessage("Enter a valid email address"),
    body("phone_number")
      .isLength({ min: 10, max: 10 })
      .withMessage("Phone number must be 10 digits"),
      body("password")
  .isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  .withMessage(
    "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
  ),

  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // 🛑 Validation failed
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { first_name, last_name, email_id, phone_number, password } =
        req.body;

      // Check if email already exists
      const existingUser = await User.findOne({ email_id });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "Email already registered. Please log in." });
      }

      // Hash password before saving
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = new User({
        first_name,
        last_name,
        email_id,
        phone_number,
        password: hashedPassword,
      });

      await newUser.save();
      res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Error registering user", error });
    }
  }
);

/* ============================
   LOGIN ROUTE
   ============================ */
router.post(
  "/login",
  [
    body("email_id").isEmail().withMessage("Enter a valid email address"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // 🛑 Validation failed
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email_id, password } = req.body;

      // Check if user exists
      const user = await User.findOne({ email_id });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Compare password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, email: user.email_id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({
        message: "Login successful!",
        token,
      });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Error logging in", error });
    }
  }
);

export default router;

