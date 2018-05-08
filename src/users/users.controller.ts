import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll(): Promise<any[]> {
        return this.usersService.findAll();
    }

    @Get(':name')
    findOne(@Param() {name}) {
        return this.usersService.findOne(name);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        this.usersService.create(createUserDto);
    }
}
