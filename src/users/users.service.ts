import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'Olasubomi', alias: 'Soft' },
    { id: 1, name: 'Moses', alias: 'Drey' },
  ];
  findAll(name?: string): User[] {
    if (name) return this.users.filter((user) => user.name === name);
    return this.users;
  }

  findById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  createUser(userDetails: CreateUserDto): User {
    const newUser = { id: this.users.length, ...userDetails };
    this.users.push(newUser);
    return newUser;
  }
}
