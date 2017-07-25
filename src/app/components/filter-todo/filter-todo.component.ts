import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-todo',
  templateUrl: './filter-todo.component.html',
  styleUrls: ['./filter-todo.component.css']
})
export class FilterTodoComponent implements OnInit {
  

  todos: Array<Object> = [];
  pattern: ''

  constructor() { }

  ngOnInit() {
  }

  addTodo(todo) {
    this.todos.push({name: todo});
  }

}
