<p align="center">
  <img src="https://github.com/AntonioAMPY/chatbot-ref-ai/assets/39747272/ccefea12-211b-47f5-9fc0-ee6020784c79" alt="ReflexBot icon" />
</p>
<h1 align="center">ReflexBot</h1>
<p align="left">
		<em>Developed with the software and tools below.</em>
</p>
<p align="left">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Javascript">
	<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript">
	<img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Nextjs">
	<img src="https://img.shields.io/badge/SQLite-000?style=for-the-badge&logo=sqlite&logoColor=07405E" alt="SQlite">
  <br>
	<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Nodejs">
	<img src="https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="Vscode">
	<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
	<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwindcss">
	<img src="https://img.shields.io/badge/jest-195900?style=for-the-badge&logo=jest&logoColor=white)]" alt="Jest">
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  
- [📍 Overview](#-overview)
- [🧩 Features](#-features)
- [🚀 Getting Started](#-getting-started)
  - [⚙️ Installation](#️-installation)
  - [🤖 Usage](#-usage)
  - [🧪 Tests](#-tests)
  - [🐱‍👤 UI](#-ui)
  
</details>
<hr>

## 📍 Overview

This Next.js application provides a chat interface for users to ask and receive answers about emotional intelligence (EQ). It leverages:

* **Frontend:** Built with React, uses Next.js App Router for navigation.
* **Backend:** Next.js API interacts with an SQLite database (managed by Drizzle) to store users, roles, chats, and messages.
Users can type their questions, and the chatbot retrieves relevant answers from a JSON file (bot-answers.json). This is a foundational chatbot. Future advancements could include machine learning and user authentication.

> [!IMPORTANT]
>
> This chatbot focuses on specific questions related to emotional intelligence. Feel free to explore them!
> * Hello
> * What is emotional intelligence?
> * What are the five key components of emotional intelligence?
> * Can you give me an example of how emotional intelligence can be used in the workplace?
> * How can I improve my emotional intelligence?
> * How can I manage my anger in a healthy way?
> * How can emotional intelligence help me in my career?
> * Thank you

---

## 🧩 Features


Get started
* Create a user profile

Engage with ReflexBot
* Start a new chat
* Chat with ReflexBot

Manage Chats:
* View past conversations
* Delete conversations

---


## 🚀 Getting Started

**System Requirements:**

* **Node**: `v20.13.1 (LTS)`

### ⚙️ Installation

> 1. Clone the chatbot-ref-ai repository:
>
> ```console
> $ git clone https://github.com/AntonioAMPY/chatbot-ref-ai.git
> ```
> 2. Change to the project directory:
> ```console
> $ cd chatbot-rf-ai
> ```

Feel free to use the option that best suits your needs:

```bash
npm run install
# or
yarn install
# or
pnpm install
# or
bun install
```

> 3. Install the dependencies:
> ```console
> $ npm run install
> ```
> 4. Create database and tables:
> ```console
> $ npm run db:push

> [!TIP]
>
> Use the same package management to run the project 📚

> [!IMPORTANT]
>
> Don't forget to run the  ```npm run db:push```, the application won't work as expected

---

### 🤖 Usage

> 1. Create a file named `.env` in the root directory and add the following environment variable:

```bash
DB_PATH=sqlite.db
```

> 2. Run development enviroment
> ```console
> $ npm run dev
> ```

---

### 🧪 Tests

> Run the test suite using the command below:
> ```console
> $ npm run test
> ```

#### Note: Heads up! Looks like there's a bug with Next.js v14 and React v18 causing this (`fetchPriority` prop on a DOM element isn't recognized by React). I'm keeping the warning/error in place for now, better safe than sorry!

---

### 🐱‍👤 UI

| Desktop | Mobile |
| ------------- | ------------- |
| <img src="https://github.com/AntonioAMPY/chatbot-ref-ai/assets/39747272/91f478c8-b51c-4afe-9934-3734e8029581" alt="Desktop-Welcome" />  | <img src="https://github.com/AntonioAMPY/chatbot-ref-ai/assets/39747272/15fcc5d4-5cee-482b-b43b-87a91e6b34f7" alt="Mobile-Welcome"/>  |
| <img src="https://github.com/AntonioAMPY/chatbot-ref-ai/assets/39747272/f2de1f1d-230f-463d-a777-deb6c8c4b63b" alt="Desktop-Chat" />  | <img src="https://github.com/AntonioAMPY/chatbot-ref-ai/assets/39747272/0b67fa2e-140c-418e-b763-01421cc14620" alt="Mobile-Chat" />  |
|  <img src="https://github.com/AntonioAMPY/chatbot-ref-ai/assets/39747272/a653385f-533c-4b58-9bb2-fdba97e1152f" alt="Mobile-Menu" /> | <img src="https://github.com/AntonioAMPY/chatbot-ref-ai/assets/39747272/9e5d9150-9433-4dd9-81c8-f5eae582f7aa" alt="Mobile-Menu" /> 

