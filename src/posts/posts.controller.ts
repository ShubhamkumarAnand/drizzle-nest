import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostRequest } from './dto/create-post.request';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getPosts() {
    return this.postsService.getPosts();
  }

  @Post()
  async createPost(@Body() request: CreatePostRequest) {
    return this.postsService.createPost(request);
  }
}
