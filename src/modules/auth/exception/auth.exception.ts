import { HttpException, HttpStatus } from '@nestjs/common';

export class LoginOrPasswordWrongException extends HttpException {
  constructor() {
    super('Login or password is wrong', HttpStatus.UNAUTHORIZED);
  }
}

export class LoginAlreadyUsed extends HttpException {
  constructor() {
    super('Login already used', HttpStatus.BAD_REQUEST);
  }
}
