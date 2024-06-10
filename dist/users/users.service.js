"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            { id: 1, name: 'John', age: 30, role: 'ADMIN' },
            { id: 2, name: 'Kim', age: 25, role: 'USER' },
            { id: 3, name: 'Doe', age: 35, role: 'USER' },
            { id: 4, name: 'Smith', age: 40, role: 'ADMIN' },
            { id: 5, name: 'Jane', age: 45, role: 'USER' },
        ];
    }
    findAll(role, age) {
        let user = [];
        if (role && age) {
            user = this.users.filter((user) => user.role === role && user.age === age);
        }
        else if (role) {
            user = this.users.filter((user) => user.role === role);
        }
        else if (age) {
            user = this.users.filter((user) => user.age === age);
        }
        if (role || age || user) {
            if (user.length === 0)
                throw new common_2.NotFoundException('User not found');
            else
                return user;
        }
        return this.users;
    }
    findOne(id) {
        const user = this.users.find((user) => user.id === id);
        if (!user)
            throw new common_2.NotFoundException('User not found');
        return;
    }
    create(createUserDto) {
        const newUserId = [...this.users].sort((a, b) => b.id - a.id)[0].id + 1;
        const newUser = { id: newUserId, ...createUserDto };
        this.users.push(newUser);
        return newUser;
    }
    update(id, updateUserDto) {
        this.users = this.users.map((user) => user.id === id ? { ...user, ...updateUserDto } : user);
        return this.findOne(id);
    }
    delete(id) {
        this.users = this.users.filter((user) => user.id !== id);
        return { id };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map