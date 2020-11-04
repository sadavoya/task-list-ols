import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h4>hello from todo list</h4>
        <TodoItem />
      </div>
    );
  }
}
