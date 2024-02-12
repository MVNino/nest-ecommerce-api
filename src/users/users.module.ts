import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { UuidHelper } from 'src/helpers/uuid.helper';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UuidHelper],
})
export class UsersModule {}
