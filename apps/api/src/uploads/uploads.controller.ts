import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { UploadsService } from './uploads.service';

@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Get('presign')
  async presign(@Query('key') key?: string) {
    const normalizedKey = key?.trim();

    if (!normalizedKey) {
      throw new BadRequestException('Query parameter "key" is required');
    }

    const url = await this.uploadsService.createPresignedUploadUrl(normalizedKey);

    return { key: normalizedKey, url };
  }
}
