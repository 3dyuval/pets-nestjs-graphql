import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Pet } from './pets.entity';

@Injectable()
export class PetsService {

    constructor(
        @InjectRepository(Pet) private petsRepository Repository<Pet>
    )
{ }
    async findAll(): Promise < Pet[] > {
    const pet = new Pet()

        pet.id = 1
        pet.name = 'ciaou'
        pet.type = 'cat'

        return [pet]
}
}
