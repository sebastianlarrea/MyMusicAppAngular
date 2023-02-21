import { AxiosResponse } from 'axios';

export interface IApi {
  get(url: string, options: object): Promise<AxiosResponse>;
  post(url: string, data: object): Promise<AxiosResponse>;
}
