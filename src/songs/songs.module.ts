import { Module } from '@nestjs/common';
import { connection } from 'src/common/constants/connection';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';

// const mockSongsService = {
//   findAll() {
//     return [{ id: 1, title: 'Lasting lover', artists: ['Sigala'] }];
//   },
// };

@Module({
  controllers: [SongsController],
  providers: [
    SongsService,
    // {
    //   provide: SongsService,
    //   useClass: SongsService,
    // },
    // {
    //   provide: SongsService,
    //   useValue: mockSongsService,
    // },
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class SongsModule {}
