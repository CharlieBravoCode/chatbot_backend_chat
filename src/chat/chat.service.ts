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
  }) {
    const { userName, personaName } = params;

    const foo = await this.httpService.axiosRef({
      method: 'post',
      url: '/v1/completions',
      data: {
        model: 'text-davinci-003',
        prompt: InitialChatPrompt.getPromptBody({
          userName,
          personaName,
          userInput
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
