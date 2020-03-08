import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterEntity } from './CharacterEntity';
import { CharacterService } from './CharacterService';
import { CharacterResolver } from './CharacterResolver';

@Module({
    imports: [TypeOrmModule.forFeature([CharacterEntity,])],
    providers: [CharacterResolver, CharacterService],
})
export class CharacterModule {}
