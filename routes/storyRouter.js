const express = require('express')
const router = express.Router()
const { addStory, getStories, getTopStories } = require('../controllers/story')
const { createStory } = require('../controllers/generateStory')

router.post('/add_story', addStory)
router.post('/create_story', createStory)
router.get('/get_stories', getStories)
router.get('/get_top_stories', getTopStories)

module.exports = router