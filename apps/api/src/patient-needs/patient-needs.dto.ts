import { IsEnum,IsObject,IsOptional,IsString } from 'class-validator';import { NeedType } from '@prisma/client';
export class CreatePatientNeedDto{@IsString() patientId!:string;@IsEnum(NeedType) type!:NeedType;@IsObject() answers!:Record<string,unknown>;@IsOptional() @IsString() summary?:string;}
