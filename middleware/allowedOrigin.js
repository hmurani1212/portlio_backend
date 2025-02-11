const allowedOrigin = "https://portflio-two.vercel.app";

const verifyOrigin = (req, res, next) => {
  const origin = req.get("Origin") || req.get("Referer");

  if (!origin || origin !== allowedOrigin) {
    return res.status(403).json({ 
      STATUS: "ERROR", 
      ERROR_DESCRIPTION: "You are not allowed to make this request." 
    });
  }

  next(); // Allow request if origin matches
};

module.exports = verifyOrigin;
