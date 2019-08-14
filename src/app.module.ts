import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blogModule';

@Module({
  imports: [BlogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
