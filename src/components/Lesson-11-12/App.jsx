// ----BEGIN-----------
import { Component } from 'react';
// import Counter from './Counter/Counter';
// import TodoList from './TodoList';
import todosArray from './TodoList/todos.json';
import TodoEditor from './TodoList/TodoEditor/TodoEditor';
import Filter from './TodoList/Filter/Filter';
import Modal from './Modal';
import IconButton from './IconButton';
import { ReactComponent as AddIcon } from './IconButton/icons/add.svg';
import { ReactComponent as DeleteIcon } from './IconButton/icons/delete.svg';

class App extends Component {
  //| --------------CONSTRUCTOR------------------
  state = {
    showModal: false,
  };

  //| --------------METODS------------------

  componentDidMount() {
    const parsedTodos = JSON.parse(localStorage.getItem('todos'));
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;
  
    if (prevState !== this.state) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }
    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  // TODO metods-complect:
  handleInputChange = event => {
    console.log(event.currentTarget.value);

    this.setState({ inputValue: event.currentTarget.value });
    console.log(this.state.inputValue);
  };

  
  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  // addTodo = text => {
  //   const todo = {
  //     id: shortid.generate(),
  //     text,
  //     completed: false,
  //   };
  //   this.setState(({ todos }) => ({
  //     todos: [todo, ...todos],
  //   }));

  //   // this.toggleModal()
  // };

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

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  //| --------------RENDER------------------

  render() {
    const { showModal, } = this.state;
    // const visibleTodos = this.getVisibleTodos();
    // const completedTodosCount = todos.filter(todo => todo.completed);
    const completedTodosVar = this.getCompletedTodoCount();

    return (
      <>
        <IconButton onClick={this.toggleModal} aria-label="add todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>


        <div>
          {/* <p>Общее количество:{todos.length}</p> */}
          {/* <p>количество выполненных:{completedTodosVar}</p> */}
          {/* <Filter value={filter} onChange={this.changeFilter} /> */}
          {/* <TodoList
            todos={this.getVisibleTodos()}
            // todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          /> */}
        </div>

        <div>
          {/* <button type="button" onClick={this.toggleModal}>
            Open modal window
          </button> */}
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <TodoEditor onSubmit={this.addTodo} />
              <IconButton onClick={this.toggleModal}>
                Close
                <DeleteIcon width="40" height="40" fill="#fff" />
              </IconButton>
            </Modal>
          )}
        </div>
      </>
    );
  }
}

export default App;
