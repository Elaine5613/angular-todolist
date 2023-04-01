import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private api_url = 'api/todos';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // POST /todos
  addTodo(desc: string): Observable<Todo> {
    let todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false
    }
    return this.http.post<Todo>(this.api_url, todo, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // PUT /todos/:id
  toggleTodo(todo: Todo): Observable<Todo> {
    const url = `${this.api_url}/${todo.id}`;
    let updatedTodo = Object.assign({}, todo, { completed: !todo.completed }) as Todo;
    return this.http.put<Todo>(url, updatedTodo, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // DELETE /todos/:id
  deleteTodoById(id: string): Observable<void> {
    const url = `${this.api_url}/${id}`;
    return this.http.delete(url, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // GET /todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo>(this.api_url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return of(error.message || error);
  }
}
