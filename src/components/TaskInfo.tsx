import { ITask } from "../types/task"

interface TaskInfoProps {
    task: ITask;
    deleteTask: (id: string) =>  void
}

export const TaskInfo= ({task, deleteTask}: TaskInfoProps) => {
    return (
        <li style={{marginBlock: 10}}>
            <div style={{display: "flex", gap: 15}}>
                <p>
                    {task.name} - {task.author}
                </p>
                <button type="button" onClick={()=>deleteTask(task.id)}>
                    Eliminar
                </button>
            </div>

        </li>
    )
}