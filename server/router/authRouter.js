import express from "express";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post(
  "/signup",
  [
    body("username")
      .trim()
      .isLength({ min: 3 })
      .withMessage("username should be at least 3 characters"),
    body("password").isLength({ min: 4 }).withMessage("password 4"),
    body("name").trim().isLength({ min: 1 }).withMessage("name"),
    body("email").trim().isEmail().withMessage("email"),
    body("url").trim().isURL().withMessage("url"),
    validate,
  ],
  (req, res, next) => {
    const { username, password, name, email, url } = req.body;
    console.log(username);

    const token = jwt.sign({ username }, "secret", { expiresIn: "15m" });

    res.status(201).json({ username, token });
  }
);

router.post(
  "/login",
  [
    body("username")
      .trim()
      // .isLength({ min: 1 })
      .notEmpty()
      .withMessage("username not empty!"),
    body("password").notEmpty().withMessage("password not empty!!!"),
    validate,
  ],
  (req, res, next) => {
    const { username, password } = req.body;

    console.log(username, password);
    const token = jwt.sign({ username }, "secret", { expiresIn: "15m" });

    res.status(200).json({ username, token });
  }
);

export default router;
