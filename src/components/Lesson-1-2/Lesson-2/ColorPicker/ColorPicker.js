// import './ColorPicker.module.css';
import s from './ColorPicker.module.css';

function ColorPicker({ options }) {
  return (
    <div className={s.container}>
      {/* <h2 className="ColorPicker__title">Color Picker</h2> */}
      <h2 className={s.title}>Color Picker</h2>
      <div>
        {options.map(option => (
          <span
            key={option.label}
            // className="ColorPicker.module__option"
            className={s.option}
            style={{ backgroundColor: option.color }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
