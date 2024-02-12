import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsUUID,
} from 'class-validator';

export class CreateUserDto {
  @IsUUID()
  public uuid: string;

  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  public first_name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  public last_name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(32)
  public password: string;
}

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  public firstName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  public lastName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(32)
  public password: string;
}
