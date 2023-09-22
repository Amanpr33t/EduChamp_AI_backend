const CustomAPIError = require('../errors/custom-error')
const { StatusCodes } = require('http-status-codes')
const AIGeneratedStory = require('../models/story')

const addStory = async (req, res, next) => {
    try {
        try {
            await AIGeneratedStory.create(req.body)
            return res.status(StatusCodes.CREATED).json({ status: 'ok', msg: 'story has been added successfully' })
        } catch (error) {
            next(error)
        }
    } catch (error) {
        next(error)
    }
}

const getStories = async (req, res, next) => {
    try {
        const stories = await AIGeneratedStory.find({})
        return res.status(StatusCodes.OK).json({ status: 'ok', count: stories.length, stories })
    } catch (error) {
        next(error)
    }
}

const getTopStories = async (req, res, next) => {
    try {
        const stories = await AIGeneratedStory.find({}).sort({ upvotes: -1 })
        return res.status(StatusCodes.OK).json({ status: 'ok', count: stories.length ,stories: stories.slice(0, 10) })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addStory,
    getStories,
    getTopStories
}
