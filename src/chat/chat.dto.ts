import { Equals, IsNotEmpty, IsString } from 'class-validator';

export class GetChatDto {
  @IsNotEmpty()
  @IsString()
  givenName: string;
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
