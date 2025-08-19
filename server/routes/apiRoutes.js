import express from 'express'
import { getStories } from '../controllers/storyController.js'

export const storiesRouter = express.Router()

storiesRouter.get('/stories', getStories)
