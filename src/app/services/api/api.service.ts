import { Injectable } from '@angular/core';
import { IApi } from 'app/models/gateways/api.interface';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements IApi {
  constructor() {
    axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${this.getToken()}`;
      return config;
    });
  }

  async get(url: string, options: object): Promise<AxiosResponse> {
    return axios.get(url, options).then((response) => response);
  }

  async post(url: string, data: object): Promise<AxiosResponse> {
    return axios.post(url, data).then((response) => response);
  }

  private getToken() {
    return localStorage.getItem('ACCESS_TOKEN');
  }
}
