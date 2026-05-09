import { Controller,Get } from '@nestjs/common';import { PrismaService } from '../prisma/prisma.service';
@Controller('organization-units')export class OrganizationUnitsController{constructor(private prisma:PrismaService){}@Get()findAll(){return this.prisma.organizationUnit.findMany({include:{children:true,facilities:true},orderBy:{name:'asc'}})}}
