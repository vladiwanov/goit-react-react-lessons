// ----BEGIN-----------
import { Component } from 'react';
// import Counter from './Counter/Counter';
// import ColorPicker from './ColorPicker';
// import colorPickerOptions from './ColorPicker/colorPickerOptions/colorPickerOptions.json';
import TodoList from './TodoList';
import todosArray from './TodoList/todos.json';
import TodoEditor from './TodoList/TodoEditor/TodoEditor';
import shortid from 'shortid';
import Filter from './TodoList/Filter/Filter';
// import Container from './Container'
// import Form from './Form';
// import s from './App.module.css'
import Modal from './Modal';
import Clock from './Clock';
import Tabs from './Tabs/Tabs';
import tabs from './data/tabs.json';
import IconButton from './IconButton';
import { ReactComponent as AddIcon } from './IconButton/icons/add.svg';
import { ReactComponent as DeleteIcon } from './IconButton/icons/delete.svg';

class App extends Component {
  //| --------------CONSTRUCTOR------------------
  state = {
    todos: todosArray,
    // todos: [],
    inputValue: '',
    filter: '',
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
    //!❌ this.setState() - нельзя ставить просто так т.к.компонент зацикливается(будет ависание броузера и переполнение)
    //'✅ this.setState() - вызывается только в результате проверки каког-то условия (например при http запросах)
    if (prevState !== this.state) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }
    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  // // .form metods-complect:
  // onSubmitHandler = data => {
  //   console.log(data);
  // };

  // TODO metods-complect:
  handleInputChange = event => {
    console.log(event.currentTarget.value);

    this.setState({ inputValue: event.currentTarget.value });
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

    // this.toggleModal()
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  //| --------------RENDER------------------

  render() {
    const { todos, filter, showModal, } = this.state;
    // const visibleTodos = this.getVisibleTodos();
    // const completedTodosCount = todos.filter(todo => todo.completed);
    const completedTodosVar = this.getCompletedTodoCount();

    return (
      <>
        <IconButton onClick={this.toggleModal} aria-label="add todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {/* <Form onSubmit={this.onSubmitHandler} /> */}
        {/* <Form onSubmit={this.onSubmitHandler} /> */}
        {/* <Counter initialValue="" /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <div>
          <p>Общее количество:{todos.length}</p>
          <p>количество выполненных:{completedTodosVar}</p>

          <Filter value={filter} onChange={this.changeFilter} />

          <TodoList
            todos={this.getVisibleTodos()}
            // todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </div>

        <div>
          {/* <button type="button" onClick={this.toggleModal}>
            Open modal window
          </button> */}
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <h1>Hi this is ....... </h1>
              <Clock />
              <Tabs items={tabs} />
              <IconButton onClick={this.toggleModal}>
                <DeleteIcon width="40" height="40" fill="#fff" />
              </IconButton>

              <TodoEditor onSubmit={this.addTodo} />
              {/* <button type="button" onClick={this.toggleModal}>
                Close{' '}
              </button> */}
            </Modal>
          )}
        </div>
      </>
    );
  }
}

export default App;
