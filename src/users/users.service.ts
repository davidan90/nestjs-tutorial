import { Component } from '@nestjs/common';
import { User } from './interface/users.interface';

@Component()
export class UserService {
    private readonly users: User[];

    findAll() {
        return this.users;
    }

    create(user: User) {

    }
}
