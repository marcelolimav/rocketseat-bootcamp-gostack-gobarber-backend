import fs from 'fs';
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import mine from 'mime';
import aws, { S3 } from 'aws-sdk';
import uploadConfig from '@config/upload';

import IStorageProvider from '../models/IStorageProvider';

class DiskStorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: 'us-east-1',
    });
  }

  public async saveFile(file: string): Promise<string> {
    const oririnalPath = path.resolve(uploadConfig.tmpFolder, file);

    const ContentType = mine.getType(oririnalPath);

    if (!ContentType) {
      throw new Error('File not found');
    }

    const fileContent = await fs.promises.readFile(oririnalPath);

    await this.client
      .putObject(
        {
          Bucket: uploadConfig.config.aws.bucket,
          Key: file,
          ACL: 'public-read',
          Body: fileContent,
          ContentType,
        },
        () => {},
      )
      .promise();

    await fs.promises.unlink(oririnalPath);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: uploadConfig.config.aws.bucket,
        Key: file,
      })
      .promise();
  }
}

export default DiskStorageProvider;
