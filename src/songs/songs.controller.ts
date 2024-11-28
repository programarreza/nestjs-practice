import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

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
