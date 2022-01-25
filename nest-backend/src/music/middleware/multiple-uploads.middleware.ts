import { Injectable, NestMiddleware } from '@nestjs/common';
import { GridFsStorage } from "multer-gridfs-storage";
import { GridFsMulterConfigService } from "../grid-fs-multer-config.service";
import multer from "multer";

type GridFsStorage = InstanceType<typeof GridFsStorage>;

@Injectable()
export class MultipleUploadsMiddleware implements NestMiddleware {

  gridFsStorage: GridFsStorage;

  constructor(private readonly gridFsMulterConfigService: GridFsMulterConfigService) {
    this.gridFsStorage = gridFsMulterConfigService.gridFsStorage;
  }

  use(req: any, res: any, next: () => void) {
    const upload = multer({
      storage: this.gridFsStorage
    });
    upload.array("files", 10);
    next();
  }
}
