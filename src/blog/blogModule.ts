import { Module } from '@nestjs/common';
import { PostService } from './services/postService';
import { PostController } from './postController';
import { PostEntity } from './entities/postEntity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]) ],
  controllers: [
    PostController],
  providers: [
    PostService],
})
export class BlogModule {}
