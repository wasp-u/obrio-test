This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## For Build

```bash
npm install

npm run build
```

## Config Rules

All configurations for the questionnaire are in

```bash
src/data/
```

If you want to create a new file for configuration you should know a few rules:

```json
    {
        "step": "1", //required, current question ID
        "title": " Select your gender:", //required, question
        "options": [ //required, answer options
            { "answer": "Female", "nextStep": "2" }, // nextStep sets up what's the next question after that answer
            { "answer": "Male", "nextStep": "2" }
        ],
        "screenType": "info", // not required, type of screen. Can be "default"(by default) | "info" | "input".
    },
    {
        "step": "2",
        "title": "My gender is: {Gender}",
        "options": [
            { "answer": "Female", "nextStep": "3" },
            { "answer": "Male", "nextStep": "3" }
        ],
        "values": { // not required, If you want to use data from previous answers you can use the following {someVariable} construct.
            "Gender": "1" // key in the string and value from question with id 1
        },
    },
    {
        "step": "3",
        "title": "Do you tend to overthink?",
        "options": [
            { "answer": "Yes", "nextStep": "info.1", "savedStep": "4" }, // use savedStep to save the next step so that the screen with “screenType”: “info” can be used before it.
            { "answer": "No", "nextStep": "info.1", "savedStep": "4" }
        ]
    },
    {
        "step": "info.1",
        "title": "So how does it work?",
        "subtitle": "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.",
        "options": [
            { "answer": "Next", "nextStep": "{savedStep}" } // and here you can pull up a saved step and go to it.
        ],
        "screenType": "info",
        "last": true //not required, set true if its the last question
    },
```

## Important!!

Before launching the application, you should also fill in the environment variables in the file .env


```bash
FIRST_STEP='1' - first screen ID
QUESTIONS_CONFIG='data.json' - path to your config file
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
