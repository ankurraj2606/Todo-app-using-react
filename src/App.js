import "./App.css";

import React, { Component } from "react";
import ListItems from "./components/ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  };
  setUpdate = (text, key) => {
    const items = this.state.items;
    items.forEach((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };
  render() {
    return (
      <div className="App">
        <h2>Todo-List</h2>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input
            type="text"
            id="todo-ip"
            placeholder="Enter Task"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          />
          <button type="submit" id="todo-btn">
            Add
          </button>
        </form>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        />
      </div>
    );
  }
}

export default App;
