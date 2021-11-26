const express = require("express")
const cors = require("cors")
const app = express()

const adminRouter = require('./Routes/admin.router')
const userRouter = require('./Routes/user.router')

const PORT = 5000 || process.env.PORT

var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/admin', adminRouter)
app.use('/user', userRouter)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
