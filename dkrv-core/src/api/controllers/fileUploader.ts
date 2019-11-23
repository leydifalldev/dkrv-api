import { Controller, UseInterceptors, Post, UploadedFiles, Logger } from '@nestjs/common';
import { FileFieldsInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  uploadFile(@UploadedFiles() files) {
    Logger.log(files);
    return files;
  }
}
