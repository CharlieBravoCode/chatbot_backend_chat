import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { InitialChatPrompt } from '../prompts/prompts';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class ChatService {
  constructor(private readonly httpService: HttpService) {}

  async getInitialChat(params: {
    userName: string;
    personaName: string;
    userInput: string;
    lastChatHistory: string;
  }) {
    const { userName, personaName, userInput, lastChatHistory } = params;

    const response = await this.httpService.axiosRef({
      method: 'post',
      url: '/v1/chats',
      data: {
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: `You are an AI assistant with the persona of ${personaName}, and you are here to help ${userName}.`,
          },
          {
            role: 'user',
            content: lastChatHistory,
          },
          {
            role: 'user',
            content: userInput,
          },
        ],
      },
      baseURL: 'https://api.openai.com',
      headers: {
        Authorization: `Bearer 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`,
      },
    });

    return response.data;
  }
}
