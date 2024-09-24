import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [DatabaseModule],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
