import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { Todo } from "./todo.model";

export class InMemoryTodoDbService implements InMemoryDbService {
  createDb() {
    let todos: Todo[] = [
      {
        id: '3bca888c-5f7b-42f1-8c7e-5945d244596f',
        desc: 'Getting up.',
        completed: true
      },
      {
        id: '9888cfa6-fbed-4b3b-969a-1e7a3fe18d2f',
        desc: 'Go to school.',
        completed: false
      },
      {
        id: '22a2ba5a-60f1-4507-b719-4b34823be963',
        desc: 'Buy some food.',
        completed: false
      }
    ];
    return todos;
  }
}
