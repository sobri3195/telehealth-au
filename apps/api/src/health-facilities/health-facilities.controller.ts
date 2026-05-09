import { Controller,Get } from '@nestjs/common';import { PrismaService } from '../prisma/prisma.service';
@Controller('health-facilities')export class HealthFacilitiesController{constructor(private prisma:PrismaService){}@Get()findAll(){return this.prisma.healthFacility.findMany({include:{organizationUnit:true},orderBy:{name:'asc'}})}}
