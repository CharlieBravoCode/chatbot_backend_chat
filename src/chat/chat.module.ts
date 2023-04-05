import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { Mobile_v1 } from './chat.controller';
import { ChatService } from './chat.service';

@Module({
  imports: [HttpModule],
  providers: [ChatService],
  controllers: [Mobile_v1],
})
export class ChatModule {}
