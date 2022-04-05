const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        const bearerHeader = req.headers.authorization;

        //if there is no token
        if (typeof bearerHeader === "undefined") {
            return res.sendStatus(403)
        }

        //if there is a token
        const token = bearerHeader.split(" ")[1];
        const payload = await jwt.verify(token, process.env.TOKEN_SECRET);
        req.userId = payload._id

        next()
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({message: "Internal Server Error"})
    }
}