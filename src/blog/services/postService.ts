import { Injectable } from '@nestjs/common';
import { Observable, of, from } from 'rxjs';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/postEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from '../dtos/createPostsDto';
import { PostDto } from '../dtos/postDto';
import * as  _ from 'lodash';
import { map } from 'rxjs/operators';
import { EditPostsDto } from '../dtos/editPostsDto';

@Injectable()
export class PostService {

  constructor( @InjectRepository(PostEntity)
  private readonly postRepository: Repository<PostEntity>) {

  }

  public findAll(): Observable <PostEntity[]> {
      return from (this.postRepository.find())
      .pipe(
        map((posts) => _.orderBy(posts, ['id'], ['asc'])),
        );
  }

  public create(createPostDto: CreatePostDto): Promise<PostDto> {
    return this.postRepository.save(createPostDto);
  }

  public edit(editPostDto: EditPostsDto): Promise<PostDto> {
    return this.postRepository.save(editPostDto);
  }

  public delete(postId: number): void {
        this.postRepository.delete(postId);
  }
}
