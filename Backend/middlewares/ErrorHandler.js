const errorHandler = (req, res, next, error) => {
    return res.status(500).json({ status: false, message:"Something went worng"})
}

module.exports = errorHandler