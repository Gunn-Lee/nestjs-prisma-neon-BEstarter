import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    fildAll(role?: 'USER' | 'ADMIN', age?: number): any[];
    findOne(id: number): void;
    create(createUserDto: CreateUserDto): {
        name: string;
        age: number;
        email?: string;
        role: "ADMIN" | "USER";
        id: number;
    };
    updateOne(id: number, updateUserDto: UpdateUserDto): void;
    deleteOne(id: number): {
        id: number;
    };
}
