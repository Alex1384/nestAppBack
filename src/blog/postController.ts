import {
  Controller,
  Get,
  Post,
  Body } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PostService } from './services/postService';
import { PostEntity } from './entities/postEntity';
import { CreatePostDto } from './dtos/createPostsDto';

@Controller('posts')
export class PostController {

  constructor(private postService: PostService) {}

  @Get()
  findAll(): Observable<PostEntity[]> {
    return this.postService.findAll();
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto): Promise<CreatePostDto> {
     return this.postService.create(createPostDto);

  }
}
