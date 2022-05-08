import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateFacebookAdsDto,
  FacebookAdsService,
  UpdateFacebookAdsDto,
  ViewFacebookAdsDto,
} from '../app';

@Controller('facebook-ads')
export class FacebookAdsController {
  constructor(private _service: FacebookAdsService) {}

  @Get()
  public async getAll(): Promise<ViewFacebookAdsDto[]> {
    return this._service.getAllFacebookAds();
  }

  @Get(':id')
  public async getById(@Param('id') id: string): Promise<ViewFacebookAdsDto[]> {
    return this._service.getFacebookAdsById(id);
  }

  @Post()
  public async create(
    @Body() model: CreateFacebookAdsDto
  ): Promise<ViewFacebookAdsDto> {
    return this._service.create(model);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() model: UpdateFacebookAdsDto
  ): Promise<ViewFacebookAdsDto> {
    console.log(model)
    return this._service.update(id, model);
  }
}
