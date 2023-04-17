class Prompt {
    getPromptBody: (any: any) => string;
  }
  
  export abstract class InitialChatPrompt extends Prompt {
    static getPromptBody = (bodyInfo: {
      userName: string;
      personaName: string;
      userInput: string;
      lastChatHistory: string;
    }): string => {
      return `I want you to act as ${bodyInfo.personaName}. --- My name is ${bodyInfo.userName}. --- You should talk to me, like you would talk to a good friend. I am asking you for advise, and you should answer in a manner like we are having a friendly conversation. --- Our conversation so far has been ${bodyInfo.lastChatHistory}  Please respond to the following input of mine: ${bodyInfo.userInput}?`;
    };
  }
  