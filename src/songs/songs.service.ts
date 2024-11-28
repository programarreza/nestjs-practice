import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local db
  // local array

  private readonly songs = [];

  //  createSongIntoDB
  create(song) {
    this.songs.push(song);
    return this.songs;
  }

  // getAllSongsFromDB
  findAll() {
    return this.songs;
  }

  
}
