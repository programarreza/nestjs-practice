import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  // create a new song
  @Post()
  create() {
    return 'create a new song endpoint';
  }

  // get all songs
  @Get()
  findAll() {
    return 'find all songs endpoint';
  }

  // get single songs by dynamic id
  @Get(':id')
  findOne() {
    return 'fetch song on the based on id';
  }

  // update song by id
  @Put(':id')
  update() {
    return 'update song on the based on id';
  }

  //  delete sing by id
  @Delete(':id')
  delete() {
    return 'delete song on the based on id';
  }
}
