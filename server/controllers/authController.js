import User from '../models/auth.js'; // Ensure the path to your model is correct
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { fullname, username, password, gender } = req.body;

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const boyProfilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    user = new User({
      fullname,
      username,
      password,
      gender,
      profilepic: gender === 'male' ? boyProfilepic : girlProfilepic // Ensure gender value comparison is correct
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = {
      user: {
        id: user.id,
        fullname: user.fullname,
        username: user.username,
        gender: user.gender,
        profilepic: user.profilepic
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token, user: payload.user });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const payload = {
      user: {
        id: user.id,
        fullname: user.fullname,
        username: user.username,
        gender: user.gender,
        profilepic: user.profilepic
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token, user: payload.user });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt", {maxage:0});
    res.status(200).json({message:"logged out successfully"});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};
