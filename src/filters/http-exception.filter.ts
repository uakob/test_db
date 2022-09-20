import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { Response } from 'express';

import {
  GenericException,
  UnimplementedConverter,
} from '../exceptions';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof GenericException) {
      try {
        const { message, status, extra } = exception.toHttpException();
        response
          .status(status)
          .json({ message, extra, statusCode: status });
        return;
      } catch (e) {
        if (e instanceof UnimplementedConverter) {
          response
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .json({
              message: "Internal server error",
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR
            });
          return;
        }
      }
    }

    if (exception instanceof HttpException) {
      response
        .status(exception.getStatus())
        .json(exception.getResponse());
      return;
    }

    response
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({
        message: typeof exception === 'string' ?
          exception : (exception.message || "Unknown Error")
      })
  }
}
