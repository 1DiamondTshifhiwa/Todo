import { useState } from 'react';

const Item = ({ text, index, deleteHandler, checkedHandler }) => {

  const [ischecked, setChecked] = useState(false);
  const [textValue, setTextValue] = useState(text);
  const [editable, setEditable] = useState(false);

  const checkboxHandler = (e) => {
    let checked = e.target.checked; // Capture the checkbox's checked state

    setChecked(checked); // Update the state
    checkedHandler(checked); // Call checkedHandler with the current checked value
  }

  const checkIfTodoIsEmpty = (setText) => {
    if (textValue === '') {
      //can't save null todo
      return
    }
    setEditable(setText)

  }

  const decbeforeDelete = () => {

    if (ischecked) checkedHandler(false);
    deleteHandler(index)
  }

  return (
    <div>
      <input type='checkbox'
        onChange={checkboxHandler} />
      {
        (editable) ?
          <input type='text'
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)} /> :
          <input type='text'
            className={(ischecked) ? 'line-through' : ''}
            value={textValue}
            disabled
          />
      }

      {
        (editable) ?
          < button
            className='border-2'
            onClick={() => checkIfTodoIsEmpty(false)}
          >
            Save
          </button> :
          <button className='border-2'
            onClick={() => setEditable(true)}
          >
            Edit
          </button>
      }
      <button
        className='border-2'
        onClick={decbeforeDelete}>
        Delete
      </button>
    </div >
  );

}

export default Item;
