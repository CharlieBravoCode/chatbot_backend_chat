class Prompt {
  getPromptBody: (any: any) => any;
}

export abstract class InitialChatPrompt extends Prompt {
  static getPromptBody = (bodyInfo: {
    givenName: string;
    personaName: string;
    userInput: string;
    lastChatHistory: string;
  }): Array<{ role: string; content: string }> => {
    const messages = [
      {
        role: 'system',
        content: `You are an AI assistant with the persona of ${bodyInfo.personaName}, and you are here to help ${bodyInfo.givenName}. You are already in the middle of the conversation, so there is no need to say "Hi" or "Hello".`,
      },
      {
        role: 'user',
        content: bodyInfo.lastChatHistory,
      },
      {
        role: 'user',
        content: bodyInfo.userInput,
      },
    ];

    return messages;
  };
}
