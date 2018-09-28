import { Injectable } from '@nestjs/common';
import { Cat } from './dto/cat.dto';

@Injectable()
export class QueryService {
  private readonly cats: Cat[] = [
    {
      id: 1,
      name: 'Cat1',
      age: 5,
    },
    {
      id: 2,
      name: 'Cat2',
      age: 10,
    },
  ];

  findAll(): Cat[] {
    return this.cats;
  }
}