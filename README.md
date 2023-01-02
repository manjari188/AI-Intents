# ultimate.ai Frontend-Challenge

Hello! We're excited about your interest in joining the Ultimate team. We also really appreciate you taking the time to
go through this task, so if you have any questions regarding this task, please don't hesitate to reach out to us!

We would like you to spend not more than a few hours on this exercise. We are primarily interested in getting a feel to
how you structure your code, and that the solution fulfills the basic requirements below. It doesn't have to be perfect!

## Some Background Information

Most of our clients use our AI as a customer service bot in chats on their websites.
When one of their users writes a message in the chat, our AI analyzes that message to understand the user's intent and
gives the appropriate reply, for example:

---
> User: "Hello"

*AI understands that this is a Greeting*

> AI: "Hello :) How can I help you?"
---

In order to understand what the user wants, our AI is trained to recognize different intents.

For each intent the AI gets a list of user messages (we call them expressions) as training data to learn
how users express that intent.
For every intent there will also be a reply that the AI Bot should return, once it recognizes a specific intent.
In the above example that intent would look like this:

---

```
Intent: Greeting
- Training Expressions: "Hello", "Hi", "Hey there!", "Good morning!", ...
- Reply: "Hello :) How can I help you?"
```

---

Most of the intents are specific to the client's business. An airline will have other intents than an eCommerce
platform.

Some intents, however, are used by almost all of our clients. So when a client creates a new AI bot in our software, we
offer them a list of already pretrained intents as part of the bot creation process. They can choose to make use of
these
pretrained intents in their AI Bot, and so save time and effort.

## Your Challenge

Attached you find a JSON file with pretrained intents.

Each item in the JSON contains the following:

- `id`: The unique ID that identifies the intent.
- `name`: The name of that intent.
- `description`: A string describing what the intent is used for.
- `trainingData`: The training data that is used to train the AI. It contains:
    - `expressionCount`: the total number of training expressions for this intent
    - `expressions`: An array with three example expressions for this intent, each with a unique `id` and a `text` field
      with the expression.
- `reply`: The reply that the bot will give when the intent is recognized, containing again a unique `id` and a `text`
  field with the actual reply.

**Your challenge is to build a page, in which our clients can see the pretrained intents and select the ones they want
to use in their AI bot.**

**This page would be one step of a wizard in the above-mentioned bot creation process
(No need to build the actual wizard of course ;)).**

We did not include a design or mockups, so you are free to solve that challenge in the way you see appropriate. The 
design should be functional. It doesn't have to be very pretty. It's more important for us to see
well-structured code and flawless functionality than a pretty UI.

## Minimum Requirements

- Your page allows users to get an overview over all the pretrained intents that are available (see intents.json).
- Users can see at least one example expression without any extra clicks.
- Users can select/unselect intents individually or all at once.
- There is no need to persist the selection upon reloading the page.

- Please implement as UI as React SPA. You may use `create-react-app` or similar if you like.
- You are free to use any additional libraries you like.
- Your solution should work on a desktop with a modern browser.
- We love tests, but they are not a requirement to complete this challenge, so only add them if you have the extra time.

## What we look for:

- Clean code that is easy to read and written with reusability and testability in mind.
- Well-structured components, with focus on separation-of-concerns, single-responsibility principle and adequate usage
  of the features the React ecosystem offers.
- If seem necessary, some comments to help us understand your design considerations.
- A simple UI that is easy to understand and intuitive to use.