import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class EmployeesService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createEmployeeDto: Prisma.EmployeeCreateInput): Promise<{
        id: number;
        name: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(role?: 'USER' | 'ADMIN' | 'GUEST'): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput): Promise<{
        id: number;
        name: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
