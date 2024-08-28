import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 5000;
const SECRET_KEY = process.env.SECRET_KEY;

// Enable CORS
app.use(cors());

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster-0001-b.tcixggr.mongodb.net/suv-database-0004-B?retryWrites=true&w=majority&appName=Cluster-0001-B`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, unique: true },
  password: String,
  userId: String,
});

const profileSchema = new mongoose.Schema({
  //   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
  //   userId: { type: String, ref: "User", unique: true },
  userId: { type: String, unique: true },
  name: String,
  username: String,
  age: Number,
  email: String,
  designation: String,
  expertise: String,
  fieldOfWork: String,
  experience: Number,
});

const networkSchema = new mongoose.Schema({
  userId: String,
  connections: [
    {
      userId: String,
      name: String,
      username: String,
      age: Number,
      email: String,
      designation: String,
      expertise: String,
      fieldOfWork: String,
      experience: Number,
    },
  ],
});

const User = mongoose.model("User", userSchema);
const Profile = mongoose.model("Profile", profileSchema);
const Network = mongoose.model("Network", networkSchema);

app.use(bodyParser.json());

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "Forbidden: No token provided" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
    req.user = user;
    next();
  });
};

app.post("/signup", async (req, res) => {
  const { name, username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = new mongoose.Types.ObjectId();
    const newUser = new User({
      name,
      username,
      password: hashedPassword,
      userId,
    });

    await newUser.save();
    res.status(201).json({ message: "User signed up successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error signing up user" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user.userId }, SECRET_KEY);
  const profile = await Profile.findOne({ userId: user.userId });

  res.json({
    message: "User logged in successfully",
    token,
    hasProfile: !!profile,
  });
});

app.get("/profile", authenticateToken, (req, res) => {
  res.json({ message: "Profile data" });
});

app.post("/profile", authenticateToken, async (req, res) => {
  const {
    name,
    username,
    age,
    email,
    designation,
    expertise,
    fieldOfWork,
    experience,
  } = req.body;
  const userId = req.user.userId;

  try {
    const newProfile = new Profile({
      userId,
      name,
      username,
      age,
      email,
      designation,
      expertise,
      fieldOfWork,
      experience,
    });

    await newProfile.save();
    res.status(201).json({ message: "Profile created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating profile" });
  }
});

app.get("/profile/:userId", authenticateToken, async (req, res) => {
  const { userId } = req.params;

  try {
    const profile = await Profile.findOne({ userId });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving profile" });
  }
});

// New endpoint to fetch profiles by name
app.get("/profile/name/:name", async (req, res) => {
  const { name } = req.params;

  try {
    const profiles = await Profile.find({ name });
    if (profiles.length === 0) {
      return res.status(404).json({ message: "No profiles found" });
    }
    res.json(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving profiles" });
  }
});

app.get("/profiles", authenticateToken, async (req, res) => {
  try {
    const profiles = await Profile.find();
    if (profiles.length === 0) {
      return res.status(404).json({ message: "No profiles found" });
    }
    res.json({ profiles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving profiles" });
  }
});

app.post("/connect", authenticateToken, async (req, res) => {
  const { profileId } = req.body;
  const userId = req.user.userId;

  try {
    const profile = await Profile.findOne({ userId: profileId });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    let network = await Network.findOne({ userId });
    if (!network) {
      network = new Network({ userId, connections: [] });
    }

    network.connections.push(profile);
    await network.save();

    res.status(201).json({ message: "Connected successfully" });
  } catch (error) {
    console.error("Error connecting:", error);
    res.status(500).json({ message: "Failed to connect" });
  }
});

app.get("/network", authenticateToken, async (req, res) => {
  const userId = req.user.userId;

  try {
    const network = await Network.findOne({ userId });
    if (!network) {
      return res.status(404).json({ message: "No connections found" });
    }

    res.json({ connections: network.connections });
  } catch (error) {
    console.error("Error fetching connections:", error);
    res.status(500).json({ message: "Failed to fetch connections" });
  }
});

// Add this endpoint to handle logout
app.post("/logout", authenticateToken, (req, res) => {
  // Here you can implement token invalidation logic if needed
  // For example, adding the token to a blacklist

  res.json({ message: "User logged out successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
