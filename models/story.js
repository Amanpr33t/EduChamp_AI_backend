const mongoose = require('mongoose')
const AIGeneratedStorySchema = new mongoose.Schema({
    prompt: {
        type: String,
        required: [true, 'Please provide a prompt'],
        trim: true
    },
    story: {
        type: String,
        required: [true, 'Please provide a story'],
        trim: true
    },
    theme: {
        type: String,
        default: ''
    },
    upVotes: {
        type:[String],
        default:[]
    },
    numberOfLikes:{
        type:Number,
        default:0
    }
}, { timestamps: true })
module.exports = mongoose.model('AIGeneratedStory', AIGeneratedStorySchema)