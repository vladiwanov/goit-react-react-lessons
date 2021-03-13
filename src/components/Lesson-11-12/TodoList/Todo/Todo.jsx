import { ReactComponent as DeleteIcon } from '../../IconButton/icons/delete.svg';
import IconButton from '../../IconButton/IconButton';

export default function Todo({ options, onDelete, onToggleCompleted }) {
  const { text, completed } = options;

  return (
    <>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="TodoList__text">{text}</p>
      {/* <button type="button" className="TodoList__btn" onClick={onDelete}> Удалить </button>     */}
      <IconButton onClick={onDelete}>
        <DeleteIcon width="40" height="40" fill="#fff" />
      </IconButton>
    </>
  );
}
