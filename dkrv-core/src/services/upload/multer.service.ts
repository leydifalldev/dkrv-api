import { Injectable, Logger } from '@nestjs/common';
import { MulterOptionsFactory, MulterModuleOptions } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  private storage: any;
  createMulterOptions(): MulterModuleOptions {
    return {
      storage: this.storage,
    };
  }

  constructor() {
    this.storage = diskStorage({
      destination: (req, file, cb) => {
        cb(null, '/upload');
      },
      filename: (req, file, cb) => {
        Logger.log('req interceptor log');
        Logger.log(req.files);
        cb(null, file.originalname);
      },
    });
  }
}
