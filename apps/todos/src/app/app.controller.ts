import { Controller, Get, Render } from '@nestjs/common';

import { AppService } from './app.service';
import { TodoService } from './todo/todo.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly todosService: TodoService,
  ) {}

  @Get('api')
  getData() {
    return this.appService.getData();
  }

  @Get()
  @Render('index')
  root() {
    return {
      todos: this.todosService.getTodos(),
    };
  }
}
