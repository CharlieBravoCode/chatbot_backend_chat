import { Equals, IsNotEmpty, IsString } from 'class-validator';

export class GetChatDto {
  @IsNotEmpty()
  @IsString()
  userName: string;
  @IsNotEmpty()
  @IsString()
  personaName: string;
  @IsNotEmpty()
  @IsString()
  userInput: string;
  @IsNotEmpty()
  @IsString()
  lastChatHistory: string;
  @Equals('INITIAL')
  chatType: string;
}
