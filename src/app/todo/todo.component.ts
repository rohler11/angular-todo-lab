import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'Fold Laundry',
      completed: false,
    },
    {
      task: 'Exercise',
      completed: false,
    },
    {
      task: 'Bake cookies',
      completed: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
