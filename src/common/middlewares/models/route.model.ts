import { RequestMethod } from '@nestjs/common';

export class Route {
    readonly path: string;
    readonly method: RequestMethod;

    constructor( path, method) {
        this.path = path;
        this.method = method;
    }
}