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
    personaName: string;
    userInput: string;
    lastChatHistory: string;
  }) {
    const { personaName, userInput, lastChatHistory } = params;

    const foo = await this.httpService.axiosRef({
      method: 'post',
      url: '/v1/completions',
      data: {
        model: 'text-davinci-003',
        prompt: InitialChatPrompt.getPromptBody({
          personaName,
          userInput,
          lastChatHistory
        }),
        temperature: 0,
        max_tokens: 400,
      },
      baseURL: 'https://api.openai.com',
      headers: {
        Authorization: `Bearer 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`,
      },
    });
    return foo.data;
  }
}
