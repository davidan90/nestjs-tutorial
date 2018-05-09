import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UsersGuard } from './users.guard';

@Controller('users')
@UseGuards(UsersGuard)
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
