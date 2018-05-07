/* AppModule is the root module of the app */

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
@Module({
    imports: [UsersModule],
})
export class ApplicationModule{}