import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function TodoList() {
    const [tareas, ponerTareas] = useState([]);
    const [nuevoTextoTarea, ponerNuevoTextoTarea] = useState("");

    const añadirTarea = () => {
        if (nuevoTextoTarea.trim() !== "") {
        ponerTareas([...tareas, { id: Date.now(), text: nuevoTextoTarea }]);
        ponerNuevoTextoTarea("");
        }
    };

    const borrarTarea = (tareaId) => {
        ponerTareas(tareas.filter((tarea) => tarea.id !== tareaId));
    };

    return (
        <div className="col-6">
            <h1>To-Do List</h1>
            <div className="d-flex">
                <input
                    className="form-control"
                    type="text"
                    value={nuevoTextoTarea}
                    onChange={(e) => ponerNuevoTextoTarea(e.target.value)}
                    placeholder="Escribir tarea"
                />
                <button className="btn btn-primary w-25" onClick={añadirTarea}>
                    Añadir tarea
                </button>
            </div>
            <ul className="list-unstyled">
                {tareas.map((tarea) => (
                <ToDoItem key={tarea.id} tarea={tarea} onDelete={borrarTarea} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
