import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CharacterService } from './CharacterService';
import { CharacterEntity } from './CharacterEntity';
import CharacterInput from './CharacterInput';
import { FindAndModifyWriteOpResultObject, InsertResult } from 'typeorm';

@Resolver()
export class CharacterResolver {
    constructor (private readonly characterService: CharacterService) {}

    @Query(() => String)
    async hello() {
        return 'world';
    }

    @Query(() => [CharacterEntity])
    async characters() {
        return this.characterService.findAll();
    }

    @Query(() => CharacterEntity)
    async getUser(@Args('firstName') firstName: string) {
        return await this.characterService.getCharacter(firstName);
    }

    @Mutation(() => CharacterEntity)
    async addCharacter(@Args('character') character: CharacterInput): Promise<CharacterEntity> {
        await this.characterService.addCharacter(character);
        return this.characterService.getCharacter(character.firstName);
    }

    @Mutation(() => CharacterEntity)
    async deleteCharacter(@Args('character') character: CharacterInput): Promise<FindAndModifyWriteOpResultObject> {
        return (await this.characterService.deleteCharacter(character.firstName)).value;
    }
}
