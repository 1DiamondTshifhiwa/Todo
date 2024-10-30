import '../index.css'
import Item from './item';
import Completed from './completed';
import { useState } from 'react';

const App = () => {

  //Store the text input state
  const [text, setText] = useState('');

  //Store Todo id count
  const [Itemid, setID] = useState(0);
  //Store the list of Todos
  const [todos, setTodos] = useState([]);

  //Stores the list of completed Todos
  const [compeleted, setCompleted] = useState(0);
  //method to add todos

  const addTodo = (e) => {
    //Prevent browser from reloading
    e.preventDefault();

    if (text === '' || text.trim() === '') { setText(''); return; }
    let todoItem = { id: Itemid, todoText: text }
    setTodos([...todos, todoItem])
    setText('')
    setID(Itemid + 1)
  }

  //method to delete todos

  const deleteHandler = (index) => {
    const temparray = [...todos];
    temparray.splice(index, 1);
    setTodos(temparray)
  }

  //Method to increment completed todos

  const checkedHandler = (checked) => {
    if (checked === true) { setCompleted(compeleted + 1); return; }
    setCompleted(compeleted - 1);
  }


  return (
    <div>
      <div className='flex items-center justify-center h-screen flex-col'>
        <Completed itemsCompleted={compeleted} count={todos.length} />
        <form>
          <input type='text'
            className='border-2 rounded-md '
            value={text}
            onChange={(e) => setText(e.target.value)} autoFocus />

          <button className='border-2 rounded-md px-6 mt-6'
            onClick={addTodo}>Add Todo</button>
        </form>

        {
          todos.map((todo, index) => {
            return (
              <div key={todo.id} id={todo.id}>
                <Item
                  text={todo.todoText}
                  deleteHandler={deleteHandler}
                  checkedHandler={checkedHandler}
                  index={index}
                />
              </div>
            );
          })
        }

      </div>
    </div>
  )
}

export default App;