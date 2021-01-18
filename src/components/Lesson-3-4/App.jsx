// ----BEGIN-----------
import { Component } from 'react';
import Counter from './Counter/Counter';
import ColorPicker from './ColorPicker';
import colorPickerOptions from '../Lesson-3-4/ColorPicker/colorPickerOptions/colorPickerOptions.json';
import TodoList from './TodoList';
import todosArray from './TodoList/todos.json';
import TodoEditor from './TodoList/TodoEditor/TodoEditor';
import shortid from 'shortid';
import Filter from './TodoList/Filter/Filter';
// import Container from './Container'
import Form from './Form';
// import s from './App.module.css'

class App extends Component {
  state = {
    todos: todosArray,
    inputValue: '',
    filter: '',
  };

  // .form metods-complect:
  onSubmitHandler = data => {
    console.log(data);
  };

  // TODO metods-complect:
  handleInputChange = event => {
    console.log(event.currentTarget.value);

    this.setState({ inputValue: event.currentTarget.value });
    console.log(this.state.inputValue);

    this.setState = { inputValue: 'AAAAA' };
    console.log(this.state.inputValue);
  };

  // toggleCompleted = todoId => {
  //   console.log(todoId);
  //   this.setState(prevState => ({
  //     todos: prevState.todos.map(todo => {
  //       if (todo.id === todoId) {
  //         return {
  //           ...todo,
  //         completed:todo.completed,}
  //       }
  //       return todo
  //     }),
  //   }))
  // }

  //. аналогичная запись:
  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  render() {
    const { todos, filter, inputValue } = this.state;
    const visibleTodos = this.getVisibleTodos();
    // const completedTodosCount = todos.filter(todo => todo.completed);
    const completedTodosVar = this.getCompletedTodoCount();
    // console.log(completedTodosCount.length);
    // console.log(completedTodosVar);

    return (
      <>
        <Form onSubmit={this.onSubmitHandler} />
        <Form onSubmit={this.onSubmitHandler} />
        <Counter initialValue="" />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Общее количество:{todos.length}</p>
          <p>количество выполненных:{completedTodosVar}</p>
          <TodoEditor onSubmit={this.addTodo} />
          <Filter value={filter} onChange={this.changeFilter} />

          <TodoList
            todos={this.getVisibleTodos()}
            // todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </div>
      </>
    );
  }
}

export default App;
