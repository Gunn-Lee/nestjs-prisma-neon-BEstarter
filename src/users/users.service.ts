import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  // Dummy DB
  private users = [
    { id: 1, name: 'John', age: 30, role: 'ADMIN' },
    { id: 2, name: 'Kim', age: 25, role: 'USER' },
    { id: 3, name: 'Doe', age: 35, role: 'USER' },
    { id: 4, name: 'Smith', age: 40, role: 'ADMIN' },
    { id: 5, name: 'Jane', age: 45, role: 'USER' },
  ];

  findAll(role?: 'ADMIN' | 'USER', age?: number) {
    let user: any[] = [];
    if (role && age) {
      user = this.users.filter(
        (user) => user.role === role && user.age === age,
      );
    } else if (role) {
      user = this.users.filter((user) => user.role === role);
    } else if (age) {
      user = this.users.filter((user) => user.age === age);
    }
    if (role || age || user) {
      if (user.length === 0) throw new NotFoundException('User not found');
      else return user;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException('User not found');
    return;
  }

  create(createUserDto: CreateUserDto) {
    const newUserId = [...this.users].sort((a, b) => b.id - a.id)[0].id + 1;
    const newUser = { id: newUserId, ...createUserDto };
    this.users.push(newUser);

    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) =>
      user.id === id ? { ...user, ...updateUserDto } : user,
    );

    return this.findOne(id);
  }

  delete(id: number) {
    this.users = this.users.filter((user) => user.id !== id);

    return { id };
  }
}
