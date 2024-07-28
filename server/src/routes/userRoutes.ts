import express from "express";
import { registerUser, userLogin } from "../controllers/userController";
import passport from "passport";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", userLogin);

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send("Logout error");
    }
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send("Session destruction error");
      }
      res.clearCookie("connect.sid");
      console.log("logout successful");
    //   res.redirect("/login");
    });
  });
});

export default router;
