import { Component } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todos: Todo[] = [];
  desc: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  addTodo() {
    this.todos = this.todoService.addTodo(this.desc);
    this.desc = '';
  }
}
