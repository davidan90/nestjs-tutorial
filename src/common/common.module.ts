import { Module, Global } from '@nestjs/common';
import { MiddlewareModule } from './middlewares/middlewares.module';

@Global()
@Module({
    imports: [MiddlewareModule]
})
export class CommonModule {}
