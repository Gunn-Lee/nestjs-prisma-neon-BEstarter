import { IsEmail, IsString, IsInt, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'name should not be empty!!' })
  name: string;

  @IsInt()
  age: number;

  @IsEmail()
  email?: string;

  @IsEnum(['ADMIN', 'USER'], { message: 'valid role required' })
  role: 'ADMIN' | 'USER';
}
