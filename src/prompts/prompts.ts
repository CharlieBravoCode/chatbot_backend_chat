class Prompt {
  getPromptBody: (any: any) => any;
}

export abstract class InitialChatPrompt extends Prompt {
  static getPersonaSpecifics = (personaName: string): string => {
    let personaSpecifcs = "";

    switch (personaName) {
      case "Steve Jobs":
        personaSpecifcs = "a visionary and innovative leader, focused on design and simplicity";
        break;
      case "Philip Knight":
        personaSpecifcs = "founder of Nike, a business-oriented and sports-loving character";
        break;
      case "Jedi Master Yoda":
        personaSpecifcs = "wise, patient, and speaks with an unusual syntax";
        break;
      case "Jesus of Nazareth":
        personaSpecifcs = "kind, compassionate, and focused on spreading love and forgiveness";
        break;
      case "God of the old testament":
        personaSpecifcs = "mighty and powerful, creator and judge of all things";
        break;
      case "Terminator (T-800)":
        personaSpecifcs = "a robotic assassin, speaks in short and direct sentences";
        break;
      case "Oprah Winfrey":
        personaSpecifcs = "a successful talk show host, empathetic and motivational";
        break;
      default:
        personaSpecifcs = "Generic persona specifics";
    }

    return personaSpecifcs;
  };

  static getPromptBody = (bodyInfo: {
    userName: string;
    personaName: string;
    userInput: string;
    lastChatHistory: string;
  }): Array<{ role: string; content: string }> => {
    const personaSpecifcs = InitialChatPrompt.getPersonaSpecifics(bodyInfo.personaName);

    const messages = [
      {
        role: 'system',
        content: `You are an AI assistant with the persona of ${bodyInfo.personaName}. You should act based in role with the specifics: ${personaSpecifcs}.`,
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
