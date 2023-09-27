
# Story Sculptor

It is an interactive web platform where users can provide a story prompt, and the AI
generates a short story based on that prompt


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express, MongoDB, LangChain


## Features

- OpenAI generates a story based on a prompt and a theme provided by the user.
- User can build a collaborative chain story by asking AI to refine the story furthur.
- User can also like or unlike the stories.
- A leaderboard shows the most liked stories.
- This is a responsive web application and is compatible with devices of all widths.


## Demo video of the project




## Screenshots




## Run Locally

Clone the project

```bash
  git clone https://github.com/Amanpr33t/EduChamp_AI_frontend
```

Go to the project directory

```bash
  cd EduChamp_AI_frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

REACT_APP_BACKEND_URL


## Challenges faced

 What challenges did I face while building this project?

- I had to learn how to integrate openAI with my node.js backend server. I used LangChain to integrate both of them.
- Generating a collaborative chain story with the AI was a challenge. I achieved this task by feeding the summary of the previously generated story to the AI as a reference for current story to be generated.
- I had to face some challenges while writing the unit tests. I was not able to create a mock http request for the components that send http requests. I was also not able to integrate redux with the unit tests.


## Scope of improvement

- I have used two API for story generation.
  
  The first API is called when the user sends first request to AI for story generation.
   
  The second API is called for subsequent requests and is used for generating a collaborative chain story based on previously generated stories.

  Instead of using two APIs and sending a summary of previously generated story to the AI, it would be better if the AI controls the chain story and remembers the previously generated story.

 - Unit tests for components having http request and using states managed by react-redux have not been added. 



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

