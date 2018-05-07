import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
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
    async create(@Body() createUserDto: CreateUserDto) {
        // TODO logic
    }
}
