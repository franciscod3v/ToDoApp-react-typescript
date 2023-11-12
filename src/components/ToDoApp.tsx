import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const ToDoApp = () => {

    const [nuevaTarea, setNuevaTarea] = useState<string>('')
    const [listaDeTareas, setlistaDeTareas] = useState<string[]>([])
    const handleAddTask = () => {
        if (nuevaTarea.trim() === '') return
        setlistaDeTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
        setNuevaTarea('')
    }

    const handleBorrarTarea = (index: number) => {
        setlistaDeTareas(tareas => tareas.filter((_, i) => i !== index
        ))
    }

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div>
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    placeholder="Nueva Tarea"
                />
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas listaTarea={listaDeTareas} borrarTarea={handleBorrarTarea} ></ListaTareas>
        </div>
    )
}