import { Injectable, } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly storage: { [key: string]: string };
  constructor() {
    this.storage = {};
  }
  
  async set(key: string, value: string): Promise<string> {
    return this.storage[key] = value;
  }

  async get(key: string): Promise<string> {
    return this.storage[key];
  }


  async del(key: string): Promise<boolean> {
    return delete this.storage[key];
  }
}
