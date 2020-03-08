import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CharacterModule } from './Character/CharacterModule';

const credentials = process.env.DATABASE_ADDRESS.split(/\//);

@Module({
  imports: [
      GraphQLModule.forRoot({
          autoSchemaFile: 'schema.gql',
      }),
      TypeOrmModule.forRoot({
          type: 'mongodb',
          host: credentials[2].split(':')[0],
          port: parseInt(credentials[2].split(':')[1]),
          username: 'mongodb',
          password: '',
          database: credentials[3],
          entities: [join(__dirname, '**/**Entity.js')],
          synchronize: true,
          useNewUrlParser: true,
          logging: true,
      }),
      CharacterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
