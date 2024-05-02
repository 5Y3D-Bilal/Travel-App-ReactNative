const User = require('../models/userModel')

const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');

module.exports = {
    createUser: async (req, res, next) => {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJs.AES.encrypt(req.body.password, process.env.SECRET)
        })

        try {
            await newUser.save()
            res.status(201).json({ status: true, message: "User Successfuly Created" })
        } catch (error) {
            return next(error)
        }
    },
    loginUser: async (req, res, next) => {
        try {
            // Checking if the user whos trying to login exists in dataBase
            const user = await User.findOne({ email: req.body.email })

            if (!user) {
                // If there is no user that match with that email then send a faild message
                return res.status(401).json({ status: false, msg: 'Invalid Credentials' });
            }

            // decryptedPassword. Here we gotta pass the same SECRET as when we encrypted the password
            const decryptedPassword = CryptoJs.AES.decrypt(user.password, process.env.SECRET);
            const decryptedString = decryptedPassword.toString(CryptoJs.enc.Utf8) // Converting the password to string

            // And now we got the password  in plain text so we can compare it with the given password by the user
            if (decryptedString !== req.body.password) {
                return res.status(401).json({ status: false, message: "Worng Password" })
            }
            //  Create token  and set it on Cookies. So a user can only be loggedIn for certain time which is in our case 21days.
            const userToken = jwt.sign({ id: user._id }, process.env.JWTSECRET, { expiresIn: '21d' })

            const user_id = user._id
            res.status(200).json({ status: true, id: user_id, token: userToken })
        } catch (error) {
            return next(error)
        }
    }
} 