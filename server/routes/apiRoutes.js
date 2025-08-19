import express from 'express'
import { getTitles, getStories } from '../controllers/storyController.js'

export const storiesRouter = express.Router()

storiesRouter.get('/titles', getTitles)
storiesRouter.get('/stories', getStories)
