import { Module } from '@nestjs/common';
import { PostService } from './services/postService';
import { PostController } from './postController';

@Module({
  imports: [],
  controllers: [
    PostController],
  providers: [
    PostService],
})
export class BlogModule {}
