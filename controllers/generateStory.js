const { OpenAI } = require("langchain/llms/openai")
const { PromptTemplate } = require("langchain/prompts")
const { LLMChain, SimpleSequentialChain } = require("langchain/chains")

const api_key = process.env.OPENAI_API_KEY
//console.log(api_key)

const model = new OpenAI({
  temperature: 0.7,
  openAIApiKey: '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'
})

const createStory = async (req, res, next) => {
  const { promptInput, theme } = req.body
  try {
    const story_template = `Write a captivating story of less than 500 words based on the follwing topic: {prompt}. ${theme !== 'none' || '' ? `The theme or tone of the story should be: ${theme}` : ''} `
    const story_prompt = new PromptTemplate({
      template: story_template,
      inputVariables: ["prompt"]
    })
    const generate_story = new LLMChain({
      llm: model,
      prompt: story_prompt
    })
    const overAllChain = new SimpleSequentialChain({
      chains: [generate_story],
      verbose: true
    })
    const response = await overAllChain.run(promptInput)
    res.status(200).json({ response, theme: theme !== 'none' || '' ? theme : '' })
  } catch (error) {
    next(error)
  }
}
module.exports = {
  createStory
}