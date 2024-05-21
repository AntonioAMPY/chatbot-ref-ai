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


> [!TIP]
>
> <sub>Use npm or pnpm 🤣</sub>

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

> 1. Clone the chatbot-ref-ai repository:
>
> ```console
> $ git clone https://github.com/AntonioAMPY/chatbot-ref-ai.git
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd chatbot-rf-ai
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm run install
> ```
> 4. Create database and tables:
> ```console
> $ npm run db:push

> [!IMPORTANT]
>
> <sub>Don't forget to run the  ```npm run db:push```, the application won't work as expected </sub>

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

---
