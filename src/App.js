import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };
  handleAddItem = (e) => {
    e.preventDefault();
    let { items, item } = this.state;
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };
  clearList = () => {
    this.setState({ items: [] });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleAddItem={this.handleAddItem}
            />
            <TodoList items={this.state.items} clearList={this.clearList} />
          </div>
        </div>
      </div>
    );
  }
}
