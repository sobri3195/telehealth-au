import { Injectable } from '@nestjs/common';
import { NeedStatus } from '../prisma/prisma-enums';
import { PrismaService } from '../prisma/prisma.service';
import { TriageService } from '../triage/triage.service';
import { CreatePatientNeedDto } from './patient-needs.dto';

type JsonInputPrimitive = string | number | boolean;
type JsonInputNestedValue = JsonInputPrimitive | JsonInputObject | JsonInputArray | null;
type JsonInputValue = JsonInputPrimitive | JsonInputObject | JsonInputArray;
type JsonInputObject = { [key: string]: JsonInputNestedValue };
type JsonInputArray = JsonInputNestedValue[];

const toJsonInputValue = (value: unknown): JsonInputValue => value as JsonInputValue;

@Injectable()
export class PatientNeedsService {
  constructor(private prisma: PrismaService, private triage: TriageService) {}

  async create(dto: CreatePatientNeedDto) {
    const assessed = this.triage.assess(dto.type, dto.answers);

    return this.prisma.patientNeed.create({
      data: {
        patientId: dto.patientId,
        type: dto.type,
        status: NeedStatus.TRIAGED,
        priority: assessed.priority,
        summary: dto.summary,
        recommendedAction: assessed.recommendation,
        answers: {
          create: Object.entries(dto.answers).map(([key, value]) => ({
            questionKey: key,
            questionLabel: key,
            value: toJsonInputValue(value),
          })),
        },
        triage: {
          create: {
            priority: assessed.priority,
            recommendation: assessed.recommendation,
            redFlags: assessed.redFlags,
          },
        },
      },
      include: { answers: true, triage: true },
    });
  }

  findAll() {
    return this.prisma.patientNeed.findMany({
      include: { patient: true, triage: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}
