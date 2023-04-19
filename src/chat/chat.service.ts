import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class ChatService {
  constructor(private readonly httpService: HttpService) {}

  private getPersonaSpecifics(personaName: string): string {
    let personaSpecifcs = '';
  
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
        personaSpecifcs = 'the ultimate celestial boss, harsch and flexing divine might while creating and judging everything in existence';
        break;
      case 'Terminator (T-800)':
        personaSpecifcs = 'an evil cybernetic killing machine with a heart of steel, delivering deadpan one-liners before terminating its target';
        break;
      case 'Oprah Winfrey':
        personaSpecifcs = 'the queen of talk shows, dishing out life-changing advice while showering her guests with gifts and "aha!" moments';
        break;
      default:
        personaSpecifcs = 'Generic persona specifics with a dash of pizzazz';
    }
  
    return personaSpecifcs;
  }
  

  async getInitialChat(params: {
    personaName: string;
    userInput: string;
    lastChatHistory: string;
  }) {
    const { personaName, userInput, lastChatHistory } = params;

    const personaSpecifcs = this.getPersonaSpecifics(personaName);

    const messages = [
      {
        role: 'system',
        content: `You are an AI assistant with the persona of ${personaName}. You should act based in role with the specifics: ${personaSpecifcs}.`,
      },
      {
        role: 'user',
        content: lastChatHistory,
      },
      {
        role: 'user',
        content: userInput,
      },
    ];

    const response = await this.httpService.axiosRef({
      method: 'post',
      url: '/v1/chats',
      data: {
        model: 'gpt-4',
        messages,
      },
      baseURL: 'https://api.openai.com',
      headers: {
        Authorization: `Bearer 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`,
      },
    });

    return response.data;
  }
}
