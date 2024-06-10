import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      data: createEmployeeDto,
    });
  }

  async findAll(role?: 'USER' | 'ADMIN' | 'GUEST') {
    if (role) {
      let employeeWithRole;
      await this.databaseService.employee
        .findMany({
          where: {
            role,
          },
        })
        .then((data) => {
          employeeWithRole = data;
        });
      console.log(employeeWithRole);
      if (employeeWithRole.length === 0) {
        throw new NotFoundException(`No employee with role ${role} found`);
      }
      return employeeWithRole;
    }
    let allEmployees;
    this.databaseService.employee.findMany().then((data) => {
      allEmployees = data;
    });
    if (!allEmployees) {
      throw new NotFoundException('No employees found');
    }
    return allEmployees;
  }

  async findOne(id: number) {
    let employee;
    await this.databaseService.employee
      .findUnique({
        where: {
          id,
        },
      })
      .then((data) => {
        employee = data;
      });
    console.log(employee);
    if (!employee) {
      throw new NotFoundException(`No employee with id ${id} found`);
    }
    return employee;
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where: {
        id,
      },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.employee.delete({
      where: {
        id,
      },
    });
  }
}
