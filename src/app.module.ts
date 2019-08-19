import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blogModule';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BlogModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'blog-app',
      entities: [__dirname + '/**/*Entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
