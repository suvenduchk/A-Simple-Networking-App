import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY; // Replace with your actual secret key

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    console.log("No token provided");
    return res.status(401).send("Authentication required");
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("Token verification failed:", error);
    res.status(401).send("Authentication required");
  }
};

export default authMiddleware;
