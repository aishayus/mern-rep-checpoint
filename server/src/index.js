import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import { userRouter } from './routes/user.js'
import { recipesRouter } from './routes/recipes.js'

const app = express()

dotenv.config()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/auth', userRouter)
app.use('/recipes', recipesRouter)

mongoose.connect(process.env.MONGO_URI).then(
    () => {console.log("Database connected successfully")
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT ${PORT}....`)
        })
    }
).catch((err) => {console.log(err)})


