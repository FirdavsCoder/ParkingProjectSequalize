import { HttpException } from "@nestjs/common";

export class CarNotFoundException extends HttpException{
    constructor() {
        super("car not found", 404)
    }
}