import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Httpclient } from './httpclient';
import { User } from './user.model';
import { Todo } from './todo.model';  // <-- import the new model

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('Top 5 Todos');  // for challenge section
  httpusers: User[] = [];  // existing users
  todos: Todo[] = [];      // new challenge todos

  constructor(private httpClient: Httpclient) {}

  ngOnInit(): void {
    // Fetch users for the users table
    this.httpClient.getUsersRemotely().subscribe((data: User[]) => {
      console.log('Users:', data);  // debug
      this.httpusers = data;
    });

    // Fetch top 5 todos for the challenge
    this.httpClient.getTodosLimited(5).subscribe((data: Todo[]) => {
      console.log('Top 5 Todos:', data);  // debug
      this.todos = data;
    });
  }
}
