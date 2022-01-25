import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from "express";
import { GridFsStorage } from "multer-gridfs-storage";
import { GridFsMulterConfigService } from "../grid-fs-multer-config.service";
import multer from "multer";

type GridFsStorage = InstanceType<typeof GridFsStorage>;

@Injectable()
export class SingleUploadMiddleware implements NestMiddleware {

  gridFsStorage: GridFsStorage;

  constructor(private readonly gridFsMulterConfigService: GridFsMulterConfigService) {
    this.gridFsStorage = gridFsMulterConfigService.gridFsStorage;
  }

  use(req: Request, res: Response, next: NextFunction) {
    const upload = multer({
      storage: this.gridFsStorage
    });
    upload.single("file");
    next();
  }
}
