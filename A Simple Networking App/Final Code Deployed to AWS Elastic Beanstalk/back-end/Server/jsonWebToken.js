import jwt from "jsonwebtoken";

function generateToken(user) {
  const payload = {
    userId: user.userId,
    username: user.username,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });

  console.log(`${token}`);
  return token;
}

export default generateToken;
