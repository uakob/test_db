import { HttpStatus } from "@nestjs/common";

export class UnimplementedConverter extends Error {};

export interface IGenericHttpException {
  message: string;
  status: HttpStatus;
  extra?: Record<string, unknown>;
}

export abstract class GenericException extends Error {
  
  constructor(public readonly message: string) {
    super(message);
  }

  protected defaultHttpConverstion(status: HttpStatus): IGenericHttpException {
    return {
      message: this.message,
      status,
    }
  }
  
  toHttpException(): IGenericHttpException {
    throw new UnimplementedConverter();
  }
}
