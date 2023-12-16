import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>, 
    ) { }

    async getUser(){
        return this.userRepository.find();
    }

    async createUser(createUser: CreateUserDTO): Promise<UserEntity>{
        const user = this.userRepository.create(createUser);
        return await this.userRepository.save(user);
    }

}
