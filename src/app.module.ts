import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { HelpersModule } from './helpers/helpers.module';
import { PrismaService } from './prisma.service';
import { WalletModule } from './wallet/wallet.module';
import { UuidHelper } from './helpers/uuid.helper';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    UsersModule,
    ProductsModule,
    CategoriesModule,
    HelpersModule,
    WalletModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, UuidHelper],
})
export class AppModule {}
