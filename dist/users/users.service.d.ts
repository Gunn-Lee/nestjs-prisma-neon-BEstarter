import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private users;
    findAll(role?: 'ADMIN' | 'USER', age?: number): any[];
    findOne(id: number): void;
    create(createUserDto: CreateUserDto): {
        name: string;
        age: number;
        email?: string;
        role: "ADMIN" | "USER";
        id: number;
    };
    update(id: number, updateUserDto: UpdateUserDto): void;
    delete(id: number): {
        id: number;
    };
}
