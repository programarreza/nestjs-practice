import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Scope,
} from '@nestjs/common';
import { Connection } from 'src/common/constants/connection';
import { CreateSongDTO } from './dto/create-song-dto';
import { SongsService } from './songs.service';

@Controller({ path: 'songs', scope: Scope.REQUEST })
export class SongsController {
  constructor(
    private songsService: SongsService,
    @Inject('CONNECTION')
    private connection: Connection,
  ) {
    console.log(
      `THIS IS CONNECTION STRING ${this.connection.CONNECTION_STRING}`,
    );
  }

  // create a new song
  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
  }

  // get all songs
  @Get()
  findAll() {
    try {
      return this.songsService.findAll();
    } catch (error) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  // get single songs by dynamic id0
  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `fetched song on the based on id ${typeof id}`;
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
