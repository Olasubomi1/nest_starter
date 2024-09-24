import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getAllUsers(name?: string): Promise<User[]> {
    if (name) return await this.userRepository.findBy({ name: name });
    return await this.userRepository.find();
  }

  async getUserById(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail({
        where: { id: id },
      });
      return user;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  createUser(userDetails: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(userDetails);
    return this.userRepository.save(newUser);
  }

  async updateUser(id: number, userDetails: UpdateUserDto): Promise<User> {
    const user = await this.getUserById(id);

    user.name = userDetails.name;
    if (userDetails.name) user.alias = userDetails.alias;
    if (userDetails.age) user.age = userDetails.age;

    return this.userRepository.save(user);
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.getUserById(id);
    return this.userRepository.remove(user);
  }
  /* private users: User[] = [
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
  */
}
