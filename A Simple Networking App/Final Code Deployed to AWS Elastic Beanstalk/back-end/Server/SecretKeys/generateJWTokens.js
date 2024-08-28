import jwt from "jsonwebtoken";
import crypto from "crypto";

// Generate a secret key
const secretKey = crypto.randomBytes(64).toString("hex");
console.log("Secret Key:", secretKey);

// Define a payload for the JWT token
const payload = {
  userId: "66b714a40b0dfe24a9853126",
  username: "name.221",
};

// Sign the JWT token using the secret key and the payload
const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
console.log("Generated JWT Token:", token);
