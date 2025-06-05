import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { Prisma } from '../../../generated/prisma';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    switch (exception.code) {
      case 'P2002':
        // Unique constraint violation
        status = HttpStatus.CONFLICT;
        const target = exception.meta?.target as string[];
        if (target?.includes('email')) {
          message = 'An account with this email already exists';
        } else if (target?.includes('username')) {
          message = 'This username is already taken';
        } else if (target?.includes('domain')) {
          message =
            'This email domain is already registered to another college';
        } else if (target?.includes('slug')) {
          message = 'A resource with this name already exists';
        } else {
          message = 'A resource with these details already exists';
        }
        break;

      case 'P2025':
        // Record not found
        status = HttpStatus.NOT_FOUND;
        message = 'The requested resource was not found';
        break;

      case 'P2003':
        // Foreign key constraint violation
        status = HttpStatus.BAD_REQUEST;
        message = 'Invalid reference to related resource';
        break;

      case 'P2014':
        // Required relation violation
        status = HttpStatus.BAD_REQUEST;
        message = 'Invalid data: required relationship missing';
        break;

      default:
        // For unknown Prisma errors, log them for debugging
        console.error('Unhandled Prisma error:', exception);
        break;
    }

    response.status(status).json({
      statusCode: status,
      message,
      error: HttpStatus[status],
      timestamp: new Date().toISOString(),
    });
  }
}
