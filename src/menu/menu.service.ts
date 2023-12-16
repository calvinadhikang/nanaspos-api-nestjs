import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuEntity } from 'src/typeorm/entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(MenuEntity)
        private menuRepository: Repository<MenuEntity>
    ) {}

    getMenuByResto(id: number){
        return this.menuRepository.find
    }
}
