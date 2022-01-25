import { Injectable } from "@nestjs/common";
import { MulterModuleOptions, MulterOptionsFactory } from "@nestjs/platform-express";
import { InjectConnection } from "@nestjs/mongoose";
import { Connection } from "mongoose";
import { GridFsStorage } from "multer-gridfs-storage";

type GridFsStorage = InstanceType<typeof GridFsStorage>;

@Injectable()
export class GridFsMulterConfigService implements MulterOptionsFactory {

    gridFsStorage: GridFsStorage;

    constructor(@InjectConnection() private connection: Connection) {
        this.gridFsStorage = new GridFsStorage({
            db: connection,
            file: (req, file) => {
                return {
                    bucketName: 'music',
                    filename: file.originalname.trim()
                }
            }
        });
    }

    createMulterOptions(): MulterModuleOptions {
        return {
            storage: this.gridFsStorage,
        };
    }
}