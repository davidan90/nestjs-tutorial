import { Component } from '@nestjs/common';
import { User } from './interface/users.interface';

@Component()
export class UsersService {
    private readonly users: User[];

    findAll(): User[] {
        return this.users;
    }

    findOne(name: string): object {
        return this.users.find( user => user.name === id);
    }

    create(user: User) {
        this.users.push(user);
    }
}
