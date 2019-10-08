import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class AppController {

  @Get()
  getHello(@Req() req: Request, @Res() res: Response): any {
    res.set('Access-Control-Allow-Credentials', 'true');
    return res.json({foo: 'bar'});
  }
}
