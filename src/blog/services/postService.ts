import { Injectable } from '@nestjs/common';
import { Observable, of, from } from 'rxjs';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/postEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from '../dtos/createPostsDto';

@Injectable()
export class PostService {

  constructor( @InjectRepository(PostEntity)
  private readonly postRepository: Repository<PostEntity>) {

  }

  public findAll(): Observable <PostEntity[]> {
      return from (this.postRepository.find());
  }

  public create(createPostDto: CreatePostDto) {
    return this.postRepository.save(createPostDto);
  }
}
