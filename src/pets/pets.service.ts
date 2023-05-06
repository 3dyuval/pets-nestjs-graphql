import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from './pets.entity';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Args } from '@nestjs/graphql';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private petsRepository: Repository<Pet>,
  ) {}

  
  createPet(@Args() createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petsRepository.create(createPetInput);
    return this.petsRepository.save(newPet);
  }

  async findAll(): Promise<Pet[]> {
    return this.petsRepository.find();
  }
}
