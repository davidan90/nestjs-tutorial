/* Middleware cant be listed in a normal @Module, we've to configure it */
import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { Route } from './model/route.model';

@Module({})
export class MiddlewareModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes(
            new Route('/users', RequestMethod.GET),
            new Route('/users', RequestMethod.POST),
        );
    }
}