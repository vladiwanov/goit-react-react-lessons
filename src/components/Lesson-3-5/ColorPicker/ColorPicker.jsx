import React, { Component } from 'react';
import s from './ColorPicker.module.css';
import classNames from 'classnames'; // для css модуля : https://github.com/JedWatson/classnames#alternate-bind-version-for-css-modules
// в данном примере  сделано через вычисляемые свойства объекта
class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
    activeColor: this.props.label,
  };

  // changeState(index){ //' возможен такой  вариант:
  changeState = (
    index,
    //// label
  ) => {
    this.setState({
      activeOptionIdx: index,
      //// activeColor: label,
    });
  };

  // makeClassNameOptions = index => {
  //   //// classNames('{s.option}', {
  //   ////   '{s.active}': index === this.state.activeOptionIdx,
  //   //// });

  //   const optionClasses = [s.option];
  //   if (index === this.state.activeOptionIdx) {
  //     optionClasses.push(s.active);
  //   }
  //   return optionClasses;
  //   return classNames;
  // };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    const activeClassName = `${s.active}`;
    console.log('lable', { label });
    return (
      <div className={s.container}>
        <h2 className={s.title}>Color Picker</h2>
        {/* ////<p> Выбран цвет: {this.state.activeColor}</p> */}
        <p> Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={classNames(`${s.option}`, {
                [`${s.active}`]: index === this.state.activeOptionIdx,
              })}
              // className={this.makeClassNameOptions(index).join(' ')}
              style={{ backgroundColor: color }}
              onClick={() => {
                this.changeState(index, label);
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
export default ColorPicker;
