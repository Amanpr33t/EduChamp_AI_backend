
# Story Sculptor

It is an interactive web platform where users can provide a story prompt, and the AI
generates a short story based on that prompt


## Tech Stack

**Server:** Node, Express, MongoDB, LangChain


## Features

- OpenAI generates a story based on a prompt and a theme provided by the user.
- User can build a collaborative chain story by asking AI to refine the story furthur.
- User can also like or unlike the stories.

## Workflow
![Workflow](https://github.com/Amanpr33t/EduChamp_AI_backend/assets/114129054/f5763520-1062-475e-b6da-697f03ead1b6)


## Run Locally

Clone the project

```bash
  git clone https://github.com/Amanpr33t/EduChamp_AI_backend 
```

Go to the project directory

```bash
  cd EduChamp_AI_backend 
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

MONGO_URI
OPENAI_API_KEY


## Challenges faced

 What challenges did I face while building this project?

- I had to learn how to integrate openAI with my node.js backend server. I used LangChain to integrate both of them.
- Generating a collaborative chain story with the AI was a challenge. I achieved this task by feeding the summary of the previously generated story to the AI as a reference for current story to be generated.  I did this so as to use minimum number of tokens while interacting with openAI.


## Scope of improvement

- I have used two API for story generation.
  
  The first API is called when the user sends first request to AI for story generation.
   
  The second API is called for subsequent requests and is used for generating a collaborative chain story based on previously generated stories.

  Instead of using two APIs and sending a summary of previously generated story to the AI, it would be better if the AI controls the chain story and remembers the previously generated story.  But it increases the number of tokens being consumed.



## 🚀 About Me
I'm a full stack developer. I posess the following skills:
1) Frontend development:
- React
- Next.js
- Tailwind CSS

2) Backend development:
- Node.js
- Express
- MongoDB
- PostgreSQL

3) Miscellaneos
- Typescript
- Git and Github
- JavaScript


## Feedback

If you have any feedback, please reach out to us at aman11865@hotmail.com

