import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import s from './Counter.module.css';
import Controls from './Controls';
import Value from './Value';

class Counter extends Component {
  /* //// constructor() {
  //   super();
  //   this.state = {
  //     value: 0,
  //   };
  // } */
  static defaultProps = {
    initialValue: 0,
  };
  // static propTypes = {};
  // state = { value: 5 }; //? публичное свойство обязательно называется state, обязательно содержит объект
  //? от него зависит разметка - это текущее состояние того , что рендерится (данные для рендеринга) и меняется методами данного класса.

  state = {
    // value: this.props.initialValue,
    value: 0,
  };
  // handleIncrement = event => {
  //   console.log('кликнули увеличить');
  //   console.log(this);

  //   setTimeout(() => {
  //     console.log(event.target);
  //   }, 2000);

  // const target = event.target;
  //   const { target } = event;

  //   setTimeout(() => {
  //     console.log(target);
  //   }, 1000);
  // };
  // handleDecrement = event => {
  //   console.log('кликнули уменьшить');
  //   console.log(this);
  //   console.log(event);
  // };

  ///!  ❌ никогда нельзя делать:
  //..//this.state.value = 5 !!!!!
  //' надо делать так  если не основываться на предыдущем
  //' результате(передается объект):
  //' this.setState({ value: 10 });
  // };

  // 'если основываться на предыдущем результате (передается функция):
  //' this.setState(prevState => ({ value: prevState.value + 1 })); ✅'

  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
    // console.log('counter state:', this.state.value);
    // console.log(this.props.defaultProps.initialValue);
  };

  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    const { value } = this.state;

    return (
      <Fragment>
        <div className={s.counter}>
          <h2>Состояние компонента</h2>
          {/* ////<span className={s.value}>{this.state.value}</span> */}
          <Value value={value} />
          {/* ////<div className={s.control}>
      ////    <button type="button" onClick={this.handleDecrement}>
      ////      уменьшить на 1
      ////    </button>
      ////    <button type="button" onClick={this.handleIncrement}>
      ////      увеличить на 1
      ////    </button>
      ////  </div> */}
          <Controls
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </div>
      </Fragment>
    );
  }
}
export default Counter;
