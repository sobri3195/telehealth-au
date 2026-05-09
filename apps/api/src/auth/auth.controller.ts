import { Body,Controller,Post } from '@nestjs/common';import { IsString,MinLength } from 'class-validator';import { AuthService } from './auth.service';
class LoginDto{@IsString() identifier!:string;@IsString() @MinLength(6) password!:string}
@Controller('auth')export class AuthController{constructor(private auth:AuthService){}@Post('login')login(@Body()dto:LoginDto){return this.auth.login(dto.identifier)}}
