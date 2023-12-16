import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './typeorm/entities/user.entity';
import { RestoModule } from './resto/resto.module';
import { RestoEntity } from './typeorm/entities/resto.entity';
import { MenuController } from './menu/menu.controller';
import { MenuService } from './menu/menu.service';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nanaspos_nestjs',
    entities: [UserEntity, RestoEntity],
    synchronize: true,
  }), UsersModule, RestoModule, MenuModule],
  controllers: [AppController, MenuController],
  providers: [AppService, MenuService],
})
export class AppModule {}
