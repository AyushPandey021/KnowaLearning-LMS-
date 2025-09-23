import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    // token either from cookies or headers
    let token = req.cookies?.token || req.headers["authorization"]?.split(" ")[1];

    if (!token) {
      return res.status(400).json({ message: "User doesn't have token" });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = verifyToken.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: `isAuth error: ${error.message}` });
  }
};

export default isAuth;
