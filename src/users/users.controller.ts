import { Controller,Post, Body,Get, Param, ParseIntPipe, Delete, Patch} from '@nestjs/common';
import { CreateUserDto } from './Dto/create-user.dto';
import { UsersService } from './users.service';
import { get } from 'https';
import { User } from './user.entity';
import { UpdateUserDto } from './Dto/update-user.dto';



@Controller('users')
export class UsersController {

    constructor(private usersService : UsersService){}

    @Get()
    getUSers(){
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUser(@Param ('id', ParseIntPipe) id:number) : Promise <User>{
        return this.usersService.getUser(id);
    }

    @Post()
    createUser(@Body() newsUser: CreateUserDto){

    return this.usersService.createUser(newsUser)
    }
    
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number){
       return this.usersService.deleteUser(id)
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id:number, @Body ()
    user: UpdateUserDto){
        return this.usersService.updateUser(id, user)
    }
}


