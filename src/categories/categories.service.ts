import { Injectable } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { PrismaService } from 'src/prisma.service';
import { UuidHelper } from 'src/helpers/uuid.helper';
import { Category } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(
    private prisma: PrismaService,
    private uuidHelper: UuidHelper,
  ) {}

  async create({ name }: CreateCategoryDto): Promise<Category> {
    const uuid: string = this.uuidHelper.generateUuid();

    return await this.prisma.category.create({
      data: {
        uuid,
        name,
      },
    });
  }

  async findAll(): Promise<Category[]> {
    return await this.prisma.category.findMany();
  }

  async findOne(uuid: string): Promise<Category> {
    return await this.prisma.category.findUnique({
      where: {
        uuid,
      },
    });
  }

  async update(uuid: string, { name }: UpdateCategoryDto): Promise<Category> {
    return await this.prisma.category.update({
      where: {
        uuid,
      },
      data: {
        name,
      },
    });
  }

  async remove(uuid: string): Promise<Category> {
    return await this.prisma.category.delete({
      where: {
        uuid,
      },
    });
  }
}
