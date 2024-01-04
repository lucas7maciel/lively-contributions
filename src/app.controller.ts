import { Controller, Get, Header, Render, Res, Req, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("file/:user")
  @Header('Content-Type', 'image/svg+xml')
  @Header('Content-Disposition', 'attachment; filename="teste.svg"')
  async getSvg(@Res() res: Response, @Param("user") user: string, @Query() query /*fazer um model*/) {
    const weeks = await this.appService.getContsByDay(user);

    const params: object = {
      bg: query.bg || "#101414",
      color: this.appService.getPallete(query.color || "green")
    }     

    res.render("teste_svg.ejs", {weeks, params})
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("visao")
  @Render('teste_old')
  async teste(): Promise<object> {
    const weeks = await this.appService.getContsByDay();

    console.log(weeks[0])
    return {weeks: weeks};
  }

  /*@Get("file")
  @Header('Content-Type', 'image/svg+xml')
  @Header('Content-Disposition', 'attachment; filename="teste.svg"')
  async getStaticFile(): Promise<StreamableFile> {
    const weeks = await this.appService.getContsByDay();
    const file: ReadStream = createReadStream(join(process.cwd(), 'views/teste_svg.ejs'));

    return new StreamableFile(file);
  }*/  

  @Get("contributions")
  async contributions(): Promise<any> {
    return this.appService.getContsByDay();
  }
}
