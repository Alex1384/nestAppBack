import {
  Controller,
  Get,
  Post,
  Body, 
  Put,
  Delete,
  Param} from '@nestjs/common';
import { Observable } from 'rxjs';
import { PostService } from './services/postService';
import { PostEntity } from './entities/postEntity';
import { CreatePostDto } from './dtos/createPostsDto';
import { EditPostsDto } from './dtos/editPostsDto';

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

  @Put()
  edit(@Body() editPostsDto: EditPostsDto): Promise<EditPostsDto> {
     return this.postService.edit(editPostsDto);
  }

  @Delete(':id')
  delete(@Param() postId: number) {
     this.postService.delete(postId);
  }
}
