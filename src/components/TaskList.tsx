import { ITask } from "../types/task"
import { Error } from "./Error";
import { TaskInfo } from "./TaskInfo";

interface TaskListProps {
    tasks: ITask[];
    deleteTask: (id: string) =>  void;
    error: boolean;
}

export const TaskList = ({tasks, deleteTask, error}:TaskListProps) => {
    return (
        <section>
            <ul style={{gap: 10}}>
            {tasks.map((task) => (
                <TaskInfo key={task.id} task={task} deleteTask={deleteTask} />
            ))}
            </ul>
            {error && <Error message='Un error al eliminar la tarea' />}
        </section>
    )
}