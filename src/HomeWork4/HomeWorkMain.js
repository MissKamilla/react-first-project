import { Component } from "react";

class HomeWorkMain extends Component {
  state = {
    todos: [
      { id: 1, name: "Vova" },
      { id: 2, name: "Kamilla" },
      { id: 3, name: "Mia" },
      { id: 4, name: "Keks" },
    ],
    input: "",
  };

  componentDidMount() {
    const IsTodos = localStorage.getItem("todos");
    if (IsTodos) {
      try {
        this.setState({ todos: JSON.parse(IsTodos) });
      } catch {}
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  addTask = () => {
    const newTask = {
      id: Date.now(),
      name: this.state.input,
    };

    this.setState({ todos: [...this.state.todos, newTask] });
    this.setState({ input: "" });
  };

  onChangeHandler = (event) => {
    this.setState({ input: event.target.value });
  };

  hendleDelete = (id) => {
    const filteredItems = this.state.todos.filter((i) => i.id !== id);
    this.setState({ todos: filteredItems });
  };

  deletelocalStorage = () => {
    localStorage.removeItem("todos");
  };

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={this.onChangeHandler}
          placeholder="New task"
        />
        <h1></h1>
        <ul>
          {this.state.todos.map((todo) => (
            <>
              <li key={todo.id}>
                {todo.name}
                <button
                  onClick={() => this.hendleDelete(todo.id)}
                  type="button"
                >
                  Delete
                </button>
              </li>
            </>
          ))}
        </ul>
        <button onClick={this.addTask}>Add TO DO</button>
        <button onClick={this.deletelocalStorage}>Delete Local Storage</button>
      </div>
    );
  }
}

export default HomeWorkMain;
