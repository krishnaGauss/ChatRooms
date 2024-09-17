import User from "../models/UserModel";
import { sign } from "jsonwebtoken";
const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (email, userId) => {
  return sign({ email, userId }, process.env.JWT_KEY, { expiresIn: maxAge });
};

export const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Email and password is required");
    }
    const user = await User.create({ email, password });
    res.cookie("jwt", createToken(email, user.id), {
      maxAge,
      secure: true,
      samSite: "None",
    });
    return res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        // firstName:user.firstName,
        // lastName:user.lastName,
        // image: user.image,
        profileSetup: user.profileSetup,
      },
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal server error");
  }
};
