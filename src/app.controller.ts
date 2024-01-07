import { Controller, Get, Header, Render, Res, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { GlobalService as G } from './global.service';
import { styleQuery } from './graph.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(): object {
    return {
      "message": "API is working correctly"
    }
  }

  @Get("file")
  file(): object{
    return {
      "message": "Please insert a GitHub nickname"
    }
  }

  @Get("file/:user")
  @Header('Content-Type', 'image/svg+xml')
  @Header('Content-Disposition', 'inline; filename="teste.svg"')
  async getSvg(@Res() res: Response, @Param("user") user: string, @Query() query : styleQuery ) {
    const weeks = await this.appService.getContsByDay(user);

    const params: object = {
      animation: query.animation || "scale",
      bg: G.bg[query.bg] || G.bg["dark"],
      color: G.colors[query.color] || G.colors["green"]
    }     

    console.log(user)
    console.log(params)

    res.render("graph.ejs", {weeks, params})
  }

  @Render("maker")
  @Get("maker")
  maker() {
    return {}
  }
}
