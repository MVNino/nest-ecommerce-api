import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { PrismaService } from 'src/prisma.service';
import { UuidHelper } from 'src/helpers/uuid.helper';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, PrismaService, UuidHelper],
})
export class CategoriesModule {}
