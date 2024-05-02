const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (authHeader) {
        // Extracting the token with Bearer thats why we splited it and now we for 2 item ["Bearer", "the_token"] and the token is at index 1.
        const token = authHeader.split(" ")[1]

        jwt.verify(token, process.env.JWTSECRET, async (err, user) => {
            if (err) {
                return res.status(403).json({ status: false, message: "Invalid Token. Please try again" })
            }

            req.user = user;
            next()
        })
    } else {
        return res.status(401).json({ status: false, message: "You are not authorized" })
    }
}

module.exports = { verifyToken }