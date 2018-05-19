import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware, Route } from '../common/middlewares';

@Module({
    controllers: [UsersController],
    components: [UsersService]
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer
            .apply(LoggerMiddleware)
            .with('USERS')
            .forRoutes(
                new Route('/users', RequestMethod.GET),
                new Route('/users', RequestMethod.POST),
            );
    }
}
