import React, { useState } from "react";
import { Row, Col, Button, FormControl} from "react-bootstrap";
import s from './TodoList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrash, faPenToSquare, faCheck, faX} from '@fortawesome/free-solid-svg-icons'

function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
  const [editTimestamp, setEditTimestamp] = useState(null); 

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  function statusTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }

  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
    setEditTimestamp(new Date());
  }

  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
        item.editTime = editTimestamp;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }

  return (
    <div>
      {todo.map((item, index) => (
        <div key={item.id} className={s.listItems}>
          <div>
            <span>{index + 1}. </span> {/* Порядковый номер задачи */}
            {edit === item.id ? (
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            ) : (
              <div className={!item.status ? s.close : ''}>
                {item.title}
                {item.editTime && (
                  <span style={{ marginLeft: "8px" }}>
                    Редактировано: {item.editTime.toLocaleString()}
                  </span>
                )}
              </div>
            )}
          </div>

          {edit === item.id ? (
            <div>
              <Button onClick={() => saveTodo(item.id)} ><FontAwesomeIcon icon={faSave}/></Button>
            </div>
          ) : (
            <div>
              <Button onClick={() => deleteTodo(item.id)} size="sm"><FontAwesomeIcon icon={faTrash}/></Button>
              <Button onClick={() => editTodo(item.id, item.title)} className={s.btn} size="sm">
              <FontAwesomeIcon icon={faPenToSquare}/>
              </Button>
              <Button onClick={() => statusTodo(item.id)} className={s.btn} size="sm">
              {
                item.status ? <FontAwesomeIcon icon={faX}/> : <FontAwesomeIcon icon={faCheck}/>
              }
      
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
