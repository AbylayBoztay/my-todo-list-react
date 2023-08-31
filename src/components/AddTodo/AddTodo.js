import React, {useState} from "react";
import { Row, Col, Button, FormControl} from "react-bootstrap";
import s from './AddTodo.module.css'


function AddTodo ({todo, setTodo}){

    const [value, setValue] = useState('')
    console.log(value);

    function saveTodo(){
        setTodo(
            [...todo, {
                id: Math.random().toString(36).substring(2,9),   
                title: value,
                status: true
            }]
        )
        setValue('')
    }

    return (
        <Row>
            <Col className={s.addTodoForm}>
                <FormControl placeholder="Введите новую задачу" value={value} onChange={ (e)=>setValue(e.target.value)}/>
                <Button  onClick={saveTodo} className={s.btn}>Сохранить</Button>
            </Col>
        </Row>
    )
}

export default AddTodo;