import express from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";

import { validate } from "../middleware/validator.js";
import * as authController from "../controller/auth.js";

const router = express.Router();

const validateCredential = [
  body("username").trim().notEmpty().withMessage("username is missing"),
  body("password")
    .isLength({ min: 4 })
    .withMessage("password should be at least 4 characters"),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body("name").notEmpty().withMessage("name is missing"),
  body("email").isEmail().normalizeEmail().withMessage("invalid Email"),
  body("url")
    .isURL()
    .withMessage("invalid URL")
    .optional({ nullable: true, checkFalsy: true }),
  validate,
];

router.post("/signup", validateSignup, authController.signup);

router.post("/login", validateCredential, authController.login);

export default router;
