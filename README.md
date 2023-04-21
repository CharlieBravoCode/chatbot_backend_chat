# HeroChat - ChatApp Backend

This project is a chatbot backend built using Nest.js for an iOS app. It connects to an external API provider (OpenAI) to generate responses based on user inputs. The project includes a Dockerfile for containerization.

This backend in production mode is currently hosted and live in the google cloud at "https://chatbot-backend-chat-ie3g6rdoga-ez.a.run.app/mobile_v1_3JzJkq6mvZ4A2U8BDokUtDKFlV1sVBwl/chat"

The mobile app locally run, currently only connects to the backend in production mode.

## Requirements

Node.js (v18.0.0 or higher)
npm (v6.0.0 or higher)
Docker (optional)

## Project Structure

``` bash
.
├── src
│   ├── chat
│   │   ├── chat.controller.ts     # Mobile_v1 controller
│   │   ├── chat.dto.ts            # GetChatDto
│   │   ├── chat.module.ts         # ChatModule
│   │   ├── chat.service.ts        # ChatService
│   │   └── constants.ts           # ChatType constants
│   └── main.ts                    # Application entry point
├── test                           # Test files
├── .dockerignore
├── .eslintrc.js
├── .gitignore
├── Dockerfile                     # Dockerfile for the project
├── package.json                   # Project dependencies
├── README.md                      # This README file

└── tsconfig.json

```

### 1. Getting Started

Clone the repository:

``` bash
git clone https://github.com/yourusername/chatapp-backend.git
cd chatapp-backend
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Start the development server

``` bash
npm run start:dev
```

The application should now be running at http://localhost:8080.

## Building and Running in Production Mode

### 1. Build the project:

``` bash
npm run build
``` 

### 2. Start the production server

``` bash
npm run start:prod
```

The application should now be running in production mode at http://localhost:8080.

## Running with Docker

### 1. Build the Docker image

``` bash
docker build -t chatapp-backend .
```

### 2. Run the Docker container

``` bash
docker run -p 8080:8080 chatapp-backend
```

The application should now be running inside a Docker container at http://localhost:8080.

## API Usage

The API provides a single endpoint to interact with the chatbot:

### Get Chat

- Endpoint: /mobile_v1_3JzJkq6mvZ4A2U8BDokUtDKFlV1sVBwl/chat
- Method: GET
- Query Parameters:
  - userName: (string) The user's name.
  - personaName: (string) The persona name.
  - userInput: (string) The user's input message.
  - lastChatHistory: (string) The last chat history (optional).
  - chatType: (string) The chat type. Currently only supports 'INITIAL'.
