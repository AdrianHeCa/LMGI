import React from 'react';

function ToDoItem({ tarea, onDelete }) {
    return (
        <div className='d-flex justify-content-between border-bottom border-1 border-dark p-1 mb-1'>
            <li className=''>
            {tarea.text}
            </li>
            <button className='btn btn-danger' onClick={() => onDelete(tarea.id)}>Eliminar</button>
        </div>
    );
}

export default ToDoItem;