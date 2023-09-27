const { OpenAI } = require("langchain/llms/openai")
const { PromptTemplate } = require("langchain/prompts")
const { LLMChain, SimpleSequentialChain } = require("langchain/chains")

const api_key = process.env.OPENAI_API_KEY

const model = new OpenAI({
    temperature: 0.7,
    openAIApiKey: api_key
})

//This function is used to generate a story by sending a prompt to openAI. It used for only the first request received for story generation.
const generateStory = async (req, res, next) => {
    const { promptInput, theme } = req.body
    try {
        if(promptInput&&promptInput.length>150){
            throw new Error('Length of the prompt cannot be more than 150 characters')
        }
        const storyTemplate = `Write a captivating story of less than 500 words based on the follwing topic: {prompt}. ${theme !== 'none' || '' ? `The theme or tone of the story should be: ${theme}` : ''} `
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
        const responseStory = await overAllChain.run(promptInput)
        req.responseStory = responseStory
        req.promptInput = promptInput
        req.theme = theme
        next()
    } catch (error) {
        next(error)
    }
}
module.exports ={generateStory} 