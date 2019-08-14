import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PostModel } from './models/postModel';
import { PostService } from './services/postService';

@Controller('posts')
export class PostController {

  constructor(private postService: PostService) {}

  @Get()
  findAll(): Observable<PostModel[]> {
    return this.postService.findAll();
  }
}
