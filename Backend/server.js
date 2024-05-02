const port = 3000
const express = require('express')
const doenv = require('dotenv').config();
const mongoose = require('mongoose');
const errorHandler = require('./middlewares/ErrorHandler');
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const countryRouter = require('./routes/country')
const placeRouter = require('./routes/place')

const app = express()

// MongoDB Connection
mongoose.connect(process.env.MONGO_DB_DATABASE_CONNECTION).then(() => {
    console.log("🥳 MongoDB Connected!");
}).catch((err) => {
    console.log(err.message)
})


app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: "10mb", extended: true }))

app.use(errorHandler)
app.use('/api/', authRouter)
app.use('/api/users', userRouter)
app.use('/api/countries', countryRouter)
app.use('/api/place', placeRouter)


app.get('/', (req, res) => res.send('Hello World!'))
// Setting App Listener
app.listen(process.env.PORT || port, () => console.log(`Travel app listening on port ${process.env.PORT || port}!`))