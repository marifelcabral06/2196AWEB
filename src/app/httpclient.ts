import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';  // existing users model
import { Todo } from './todo.model';  // new todos model

@Injectable({
  providedIn: 'root'
})
export class Httpclient {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private todosUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  // Fetch all users
  getUsersRemotely(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Fetch all todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  // Fetch only top 5 todos (challenge requirement)
  getTodosLimited(limit: number = 5): Observable<Todo[]> {
    return this.getTodos().pipe(
      map(todos => todos.slice(0, limit))  // limit to first 5
    );
  }
}
