export type FacebookAdsReportData = {
  date: string,
  productId: string,
  view: number,
  click: number,
  adSpends: number
}

export type UserInfo = {
  id: string,
  first_name: string,
  last_name: string,
  middle_name: string,
  name: string,
  name_format: string
  picture: string,
  short_name: string
}

export interface FacebookAdAccount {
  id: string;
  account_id: string;
  business: {
    id: string;
    name: string;
  }
}

export type FacebookApiError = {
  message: string,
  type: string,
  code: number,
  error_subcode: number,
  error_user_title?: string,
  error_user_msg?: string,
  fbtrace_id: string,
}

export interface FacebookAdsProvider {
  createOAuthUrl(data: string): string;
  getUserInfo(accessToken: string): Promise<FacebookAdsReportData[]>;
  getAdAccounts(accessToken: string, userId: string): Promise<FacebookAdAccount[]>
  syncInsightData(accessToken: string): Promise<FacebookAdsReportData[]>;
}
