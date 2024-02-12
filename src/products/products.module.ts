import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { UuidHelper } from 'src/helpers/uuid.helper';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService, UuidHelper],
})
export class ProductsModule {}
