import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, User } from '@prisma/client';
import { UuidHelper } from 'src/helpers/uuid.helper';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private uuidHelper: UuidHelper,
  ) {}

  async create(userCreateInput: Prisma.UserCreateInput): Promise<User | null> {
    const uuid = this.uuidHelper.generateUuid();

    return await this.prisma.user.create({
      data: {
        ...userCreateInput,
        uuid: uuid,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(uuid: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        uuid,
      },
    });
  }

  async update(
    uuid: string,
    userUpdateInput: Prisma.UserUpdateInput,
  ): Promise<User> {
    return await this.prisma.user.update({
      where: {
        uuid,
      },
      data: {
        ...userUpdateInput,
      },
    });
  }

  async remove(uuid: string): Promise<User> {
    return await this.prisma.user.delete({
      where: {
        uuid,
      },
    });
  }
}
