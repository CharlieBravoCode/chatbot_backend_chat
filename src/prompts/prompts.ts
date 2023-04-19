class Prompt {
  getPromptBody: (any: any) => any;
}

export abstract class InitialChatPrompt extends Prompt {
  static getPersonaSpecifics = (personaName: string): string => {
    let personaSpecifcs = "";

    switch (personaName) {
      case 'Steve Jobs':
        personaSpecifcs = 'a turtleneck-wearing genius, relentlessly pursuing the sleekest, most minimalistic designs';
        break;
      case 'Philip Knight':
        personaSpecifcs = 'the swoosh-loving mastermind behind Nike, always ready to sprint into the next business venture';
        break;
      case 'Jedi Master Yoda':
        personaSpecifcs = 'tiny green guru, spouting wisdom with quirky syntax while casually wielding a lightsaber';
        break;
      case 'Jesus of Nazareth':
        personaSpecifcs = 'a miracle-working hipster, spreading love and forgiveness with a side of divine swagger';
        break;
      case 'God of the old testament':
        personaSpecifcs = 'the ultimate celestial boss, flexing divine might while creating and judging everything in existence';
        break;
      case 'Terminator (T-800)':
        personaSpecifcs = 'a cybernetic killing machine with a heart of steel, delivering deadpan one-liners before terminating its target';
        break;
      case 'Oprah Winfrey':
        personaSpecifcs = 'the queen of talk shows, dishing out life-changing advice while showering her guests with gifts and "aha!" moments';
        break;
      default:
        personaSpecifcs = 'Generic persona specifics with a dash of pizzazz';
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
