import { IsEnum,IsObject,IsOptional,IsString } from 'class-validator';import { NeedType } from '../prisma/prisma-enums';
export class CreatePatientNeedDto{@IsString() patientId!:string;@IsEnum(NeedType) type!:NeedType;@IsObject() answers!:Record<string,unknown>;@IsOptional() @IsString() summary?:string;}
