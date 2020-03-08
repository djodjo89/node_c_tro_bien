import { Injectable } from '@nestjs/common';
import { CharacterEntity } from './CharacterEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAndModifyWriteOpResultObject, InsertResult, MongoRepository } from 'typeorm';
import CharacterInput from './CharacterInput';

@Injectable()
export class CharacterService {
    constructor (
        @InjectRepository(CharacterEntity)
        private readonly characterRepository: MongoRepository<CharacterEntity>,
    ) {}

    public async findAll(): Promise<CharacterEntity[]> {
        return this.characterRepository.find();
    }

    public async addCharacter(characterInput: CharacterInput): Promise<InsertResult> {
        const character = new CharacterEntity();
        character.firstName = characterInput.firstName;
        character.age = characterInput.age;
        character.address = characterInput.address;
        return await this.characterRepository.insert(character);
    }

    public async deleteCharacter(firstName: string): Promise<FindAndModifyWriteOpResultObject> {
        return this.characterRepository.findOneAndDelete({firstName: firstName});
    }

    public async getCharacter(firstName: string): Promise<CharacterEntity> {
        return this.characterRepository.findOne({firstName: firstName});
    }
}
