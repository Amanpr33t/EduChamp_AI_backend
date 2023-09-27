const { OpenAI } = require("langchain/llms/openai")
const { PromptTemplate } = require("langchain/prompts")
const { LLMChain, SimpleSequentialChain } = require("langchain/chains")

const api_key = process.env.OPENAI_API_KEY

const model = new OpenAI({
    temperature: 0.7,
    openAIApiKey: api_key
})

//This function is used to create a chain story for the requests user sends for story generation
const storyChain = async (req, res, next) => {
    const { promptInput, summaryOfStory, theme } = req.body
    try {
        if(promptInput&&promptInput.length>150){
            throw new Error('Length of the prompt cannot be more than 150 characters')
        }
        const storyTemplate = `This is the summary of a story that you had earlier generated: ${summaryOfStory}. Generate a captivating story in less than 500 words based on this prompt:${promptInput}. The story you generate now should be an extension of the summary that you had generated earlier. ${theme ? `Here is the theme of the story that you should generate: ${theme}` : ''}.{prompt}`

        const storyPrompt = new PromptTemplate({
            template: storyTemplate,
            inputVariables: ["prompt"]
        })
        const generateStory = new LLMChain({
            llm: model,
            prompt: storyPrompt
        })
        const overAllChain = new SimpleSequentialChain({
            chains: [generateStory],
            verbose: true
        })
        const responseStory = await overAllChain.run("")
        req.responseStory = responseStory
        req.promptInput = promptInput
        req.theme = theme
        next()
    } catch (error) {
        next(error)
    }
}


module.exports = {
    storyChain
}