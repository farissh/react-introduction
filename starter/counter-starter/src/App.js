import { useState } from "react";
import classnames from "classnames"; // eslint-disable-next-line

import "./App.css";

import shoppingIcon from "./assets/shopping-icon.svg";

import plusIcon from "./assets/plus-icon.svg";

import minusIcon from "./assets/minus-icon.svg";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Susu ultra", count: 1 },
    { title: "Tahi Sumedang", count: 1 },
    { title: "Semangka", count: 1 },
  ]); //eslint-disable-next-line

  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={shoppingIcon} alt="shopping icon" />
        <h1 className="nav-title">Shopping List</h1>
      </nav>

      <section className="container">
        <form className="form">
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            Value={value}
            className="input"
            type="text"
            placeholder="list"
          />
          <button className="add-button" type="submit">
            Add
          </button>
        </form>

        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo, index, arr) => {
              return (
                <div key={index} className={`todo ${!(arr.length === index + 1) && "todo-divider"}`}>
                  {todo.title}
                  <div className="todo-icon-wrapper">
                    <div className="todo-count">{todo.count}</div>
                    <button className="todo-action-button">
                      <img src={minusIcon} alt="minus icon" />
                    </button>
                    <button className="todo-action-button">
                      <img src={plusIcon} alt="plus icon" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Kosong</div>
        )}
      </section>
    </>
  );
}

export default App;
