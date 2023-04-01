import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  desc: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  addTodo() {
    this.todoService.addTodo(this.desc).subscribe(todo => {
      this.todos = [...this.todos, todo];
      this.desc = ''
    });
  }

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todoService.toggleTodo(todo).subscribe(todo => {
      this.todos = [...this.todos.slice(0, index), todo, ...this.todos.slice(index + 1)];
    });
  }

  removeTodo(todo:Todo) {
    const index = this.todos.indexOf(todo);
    this.todoService.deleteTodoById(todo.id).subscribe(todo => {
      this.todos = [...this.todos.slice(0, index), ...this.todos.slice(index + 1)];
    });
  }

  getTodo():void {
    this.todoService.getTodos().subscribe(todos => this.todos = [...todos]);
  }
}
