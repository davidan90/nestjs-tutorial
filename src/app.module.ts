/* AppModule is the root module of the app */

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';

@Module({
    imports: [CommonModule, UsersModule],
})
export class ApplicationModule{}