import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    async findAll(): Promise<any[]> {
        return [];
    }

    @Get(':id')
    findOne(@Param() {id}) {
        return {};
    }

    @Post()
    create() {
        // TODO logic
    }
}
