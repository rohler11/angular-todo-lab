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
  // ----------------------------

  addTask(form: NgForm) {
    let newTask: Todo = {
      task: form.value.addTodo,
      completed: false,
    };
    this.todos.push(newTask);
  }

  // ----------------------------
  // complete task v v
  // it doesn't recognize dot notation? I'm not sure how to access it?
  // ----------------------------

  completeTask(index: number) {
    return (this.todos[index].completed = true);
    // return this.todos.value.completed === true;
  }

  // ----------------------------
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
