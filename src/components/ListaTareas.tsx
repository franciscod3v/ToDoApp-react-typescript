import { Tarea } from "./Tarea"

type ListaTareas = {
    listaTarea: string[]
    borrarTarea: (index: number) => void
}

export const ListaTareas = ({ listaTarea, borrarTarea }: ListaTareas) => {
    return (
        <div className="taskList">
            {listaTarea.map((tarea, index) => (
                <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)} ></Tarea>
            )
            )}
        </div>
    )
}