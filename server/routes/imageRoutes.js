import express from 'express'
import { removeBgImage } from '../controllers/ImageController.js'
import upload from '../moddlewares/multer.js'
import authUser from '../moddlewares/auth.js'

const imageRouter = express.Router()

imageRouter.post('/remove-bg',upload.single('image'),authUser,removeBgImage)

export default imageRouter