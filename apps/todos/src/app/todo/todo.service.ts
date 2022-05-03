import { Todo } from '@myorg/data';
import { Injectable } from '@nestjs/common';

const todos: Todo[] = [
  { message: 'Take out trash', done: false},
  { message: 'Continue using Nx', done: false},
]

@Injectable()
export class TodoService {
  getTodos(): Todo[] {
    return todos;
  }
}
