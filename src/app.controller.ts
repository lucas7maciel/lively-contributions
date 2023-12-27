import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("teste")
  itsWorking(): string {
    return this.appService.itsWorking();
  }

  @Get("visao")
  @Render('teste')
  async teste(): Promise<object> {
    const weeks = await this.appService.getContsByDay();

    console.log(weeks[0])
    return {weeks: weeks};
  }

  @Get("contributions")
  async contributions(): Promise<any> {
    return this.appService.getContsByDay();
  }
}
