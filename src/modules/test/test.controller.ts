import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Render,
} from '@nestjs/common';
import { PersonDto } from './dto/person.dto';
import { TestService } from './test.service';

@Controller()
export class TestController {
  constructor(
    private readonly testService: TestService,
  ) {}

  // 渲染html时，若要走hbs渲染，GET不要加尾缀，否则会走nest原本的渲染
  @Get('buy-plate/buy-plate')
  @Render('buy-plate/buy-plate.html')
  getBugPlate() {
    return {
      data: 'data',
    };
  }

  @Get('getString')
  getServiceString(@Query() query): string {
    console.log(query);
    return this.testService.hello();
  }

  @Post('addPerson')
  addPerson(@Body() personDto: PersonDto): object {
    console.log(personDto);
    return personDto;
  }
}
