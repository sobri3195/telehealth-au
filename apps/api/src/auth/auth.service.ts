import { Injectable } from '@nestjs/common';import { JwtService } from '@nestjs/jwt';
@Injectable()export class AuthService{constructor(private jwt:JwtService){}login(identifier:string){const payload={sub:'dummy-user',identifier,role:'PATIENT'};return {accessToken:this.jwt.sign(payload,{expiresIn:'15m'}),refreshToken:this.jwt.sign(payload,{expiresIn:'7d'}),user:payload}}}
