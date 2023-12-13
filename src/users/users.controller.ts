/* users.controller.ts */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Get()
    getUsers() {
        return this.userService.getUser();
    }
}
