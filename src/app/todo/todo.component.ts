import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';

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
  // added new
  searchTerm: string;
  //  ^ ^ ^

  constructor() {}

  removeTask(index: number) {
    this.todos.splice(index, 1);
  }
  // --------------------------
  setSearchTerm(form: NgForm) {
    this.searchTerm = form.value.searchTerm.trim().toLowerCase();
  }

  filter() {
    if (!this.searchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todo) => {
        let currentTask = todo.task.toLowerCase().trim();
        return currentTask.includes(this.searchTerm);
      });
    }
  }
  // ------------------------------------
  ngOnInit(): void {}
}
