import { Controller, Get } from "@nestjs/common";

@Controller('facebook-ads/sync')
export class FacebookAdsSyncController {
  @Get()
  public async syncAllData(): Promise<any> {
    throw new Error('API not implemented.');
  }
}
