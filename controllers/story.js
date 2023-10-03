const CustomAPIError = require('../errors/custom-error')
const { StatusCodes } = require('http-status-codes')
const AIGeneratedStory = require('../models/story')

//This function is used to save a story to the MongoDB database.
const saveStory = async (req, res, next) => {
    try {
        await AIGeneratedStory.create(req.body)
        return res.status(StatusCodes.CREATED).json({ status: 'ok', msg: 'story has been added successfully' })
    } catch (error) {
        next(error)
    }
}

//This function is used to fetch a single story from the database.
const getSingleStory = async (req, res, next) => {
    try {
        const story = await AIGeneratedStory.find({ _id: req.params.id })
        if (story) {
            return res.status(StatusCodes.OK).json({ status: 'ok', story })
        }
        throw new CustomAPIError('Story not found', StatusCodes.NOT_FOUND)
    } catch (error) {
        next(error)
    }
}

//This function is used to fetch all stories from the database

const getStories = async (req, res, next) => {
    try {
        const stories = await AIGeneratedStory.find({})
        return res.status(200).json({ status: 'ok', count: stories.length, stories })
    } catch (error) {
        next(error)
    }
}

//This fiunction is used to fetch top 10 most voted stories
const getTopStories = async (req, res, next) => {
    try {
        const stories = await AIGeneratedStory.find({}).sort({ numberOfLikes: -1 })
        return res.status(StatusCodes.OK).json({ status: 'ok', stories: stories.slice(0, 10) })
    } catch (error) {
        next(error)
    }
}

//This function is used to add or remove an email from the upVotes array present in the database. It is triggered when the user clicks on the like button on the frontend
const updateVotes = async (req, res, next) => {
    const { id, email, operation } = req.query
    try {
        const story = await AIGeneratedStory.findOne({ _id: id })
        if (!story) {
            throw new CustomAPIError('Story not found', 204)
        }
        let upVotes
        if (operation === 'inc') {
            upVotes = [...story.upVotes, email]
        } else {
            upVotes = story.upVotes.filter(item => item !== email)
        }
        await AIGeneratedStory.findOneAndUpdate({
            _id: id
        },
            { upVotes, numberOfLikes: upVotes.length },
            { new: true, runValidators: true })
        return res.status(StatusCodes.OK).json({ status: 'ok', msg: 'Votes have been updated' })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    saveStory,
    getStories,
    getTopStories,
    updateVotes,
    getSingleStory
}
