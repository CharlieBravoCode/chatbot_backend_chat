import {
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Query,
  } from '@nestjs/common';
  
  import { ChatService } from './chat.service';
  import { GetChatDto } from './chat.dto';
  import { ChatType } from './constants';
  
  @Controller('mobile_v1_3JzJkq6mvZ4A2U8BDokUtDKFlV1sVBwl')
  export class Mobile_v1 {
    constructor(private chatService: ChatService) {}
    @Get('chat')
    async getChatFromOpenAIO(@Query() query: GetChatDto) {
      if ((query.chatType = ChatType.INITIAL)) {
        const chat = await this.chatService.getInitialChat(query);
        return chat;
      } else {
        throw new HttpException(
          'Invalid chatType parameter',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }
  