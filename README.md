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

## Cyber Security Measures

### Implemented Measures

1. Dependency Management: The `package.json` file specifies specific versions of the required packages, minimizing the risk of accidentally introducing insecure packages or versions.
2. Input Validation: The `GetChatDto` class in `chat.dto.ts` contains input validation using `class-validator` decorators. This helps prevent injection attacks by validating and sanitizing user input.
3. Error Handling: The `Mobile_v1` controller in `chat.controller.ts` contains proper error handling with `HttpException`. This prevents the leaking of sensitive information through error messages.

### Current Flaws and Threats

1. API Key Exposure: The API key for the external API (OpenAI) is hardcoded in the `chat.service.ts` file, which is a security risk. It is recommended to use environment variables or a secrets management solution to securely store and access the API key.
2. No Authentication: There is no authentication mechanism in place for the API. This means anyone with knowledge of the API endpoint can make requests. Implementing an authentication mechanism (e.g., JWT tokens or OAuth2) would help secure the API.
3. No Rate Limiting: There is currently no rate limiting implemented for the API, making it vulnerable to DDoS attacks or abuse. Implementing rate limiting can help protect the service from being overwhelmed by a high volume of requests.
4. No HTTPS: The application does not enforce HTTPS, which means data transmitted between the client and server is not encrypted. This makes it vulnerable to man-in-the-middle attacks. Configuring the application to use HTTPS can help protect against this threat.
5. No Content Security Policy (CSP): The application does not have a Content Security Policy in place. Implementing a CSP can help prevent cross-site scripting (XSS) attacks.
6. No Security Headers: The application does not set security headers such as `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, or `Referrer-Policy`. These headers can help enhance the application's security by restricting browser behavior.
7. Docker Image: The Dockerfile is using the `node:18-alpine` base image. While the Alpine image is lightweight and reduces attack surface, it may not receive timely security updates. Regularly updating the base image and checking for security vulnerabilities can help improve the security posture.
8. No Automated Security Testing: There is no automated security testing (e.g., vulnerability scanning, penetration testing) included in the project's CI/CD pipeline. Integrating automated security testing can help identify and mitigate security issues early in the development process.
9. No Security Documentation: The project does not have any security documentation (e.g., security policy, incident response plan) in place. Developing and maintaining security documentation can help improve security awareness and incident response.
