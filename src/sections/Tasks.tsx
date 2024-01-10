import styles_tasks from './styles/styles_Tasks.module.css';
import { FaClipboardList } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

interface Task {
    taskId: number;
    taskName: string;
    taskCompleted: boolean;
}

interface TasksProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function Tasks({ tasks, setTasks }: TasksProps) {

    function createTask({ taskCompleted, taskName, taskId }: Task) {
        return (
            <div
                key={taskId}
                className={
                    !taskCompleted ? styles_tasks.taskItem : `${styles_tasks.taskCompleted} ${styles_tasks.taskItem}`
                }
            >
                <button onClick={() => handleCompletTask(taskId)}>
                    {!taskCompleted ? <FaRegCircle /> : <FaCircleCheck />}
                </button>
                <p>{taskName}</p>
                <button className={styles_tasks.trash} onClick={() => handleDeleteTask(taskId)}>
                    <FaRegTrashAlt />
                </button>
            </div>
        )
    }

    function renderNoTasks() {
        return (
            <div className={styles_tasks.notasks}>
                <FaClipboardList />
                <p className={styles_tasks.fw}>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        )
    }

    function handleCompletTask(id: number) {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.taskId === id
                    ? { ...task, taskCompleted: !task.taskCompleted }
                    : task
            )
        )
    }

    function handleDeleteTask(id: number) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.taskId !== id));
    }

    return (
        <section className={styles_tasks.tasks}>
            <div className={styles_tasks.infotasks}>
                <p>
                    Tarefas criadas
                    <span>
                        {tasks.length}
                    </span>
                </p>
                <p className={styles_tasks.conclude}>
                    Tarefas Concluídas
                    <span>
                        {tasks.filter((task) => task.taskCompleted).length} de {tasks.length}
                    </span>
                </p>
            </div>
            <div>
                {tasks.length > 0 ? (
                    tasks.map((task) => createTask(task))
                ) : (
                    renderNoTasks()
                )}
            </div>
        </section>
    );
}
