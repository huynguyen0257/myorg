import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateFacebookAdsDto,
  CreateFacebookAdsUseCase,
  GetAllFacebookAdsUseCase,
  GetFacebookAdsByIdUseCase,
  RemoveFacebookAdsUseCase,
  UpdateFacebookAdsDto,
  UpdateFacebookAdsUseCase,
  ViewFacebookAdsDto,
} from '../app';

@Controller('facebook-ads')
export class FacebookAdsController {
  constructor(
    private _getAllUC: GetAllFacebookAdsUseCase,
    private _getByIdUC: GetFacebookAdsByIdUseCase,
    private _createUC: CreateFacebookAdsUseCase,
    private _updateUC: UpdateFacebookAdsUseCase,
    private _removeUC: RemoveFacebookAdsUseCase
  ) {}

  @Get()
  public async getAll(): Promise<ViewFacebookAdsDto[]> {
    return this._getAllUC.execute();
  }

  @Get(':productId')
  public async getById(@Param('productId') productId: string): Promise<ViewFacebookAdsDto> {
    return this._getByIdUC.execute({ productId, date: new Date() });
  }

  @Post()
  public async create(
    @Body() model: CreateFacebookAdsDto
  ): Promise<ViewFacebookAdsDto> {
    return this._createUC.execute(model);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() model: UpdateFacebookAdsDto
  ): Promise<ViewFacebookAdsDto> {
    return this._updateUC.execute({ ...model, id });
  }

  @Delete(':productId')
  public async remove(@Param('productId') productId: string): Promise<ViewFacebookAdsDto> {
    throw new Error('Method not implemented.');
  }
}
