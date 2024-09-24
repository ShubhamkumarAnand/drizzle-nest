import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserProfile } from './dto/create-user-profile.request';
import { CreateUserRequest } from './dto/cretae-user.request';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Post('profile')
  async createProfile(@Body() request: CreateUserProfile) {
    return this.usersService.createProfile(request);
  }

  @Post()
  async createUser(@Body() request: CreateUserRequest) {
    return this.usersService.createUser(request);
  }
}
