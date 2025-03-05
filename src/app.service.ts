import { Inject, Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigService';

@Injectable()
export class AppService {
  constructor(
    private devConfigService: DevConfigService,
    @Inject('CONFIG')
    private config: { port: string },
  ) {}

  getHello(): string {
    return `Hello i am learning nest.js and my db host is ${this.devConfigService.getDBHOST()} and my port is ${this.config.port}`;
  }
}
