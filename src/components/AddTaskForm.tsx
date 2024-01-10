//Imports
import { useState } from "react";

//Assets
import { FiPlusCircle } from "react-icons/fi";

//Css
import styles_addtaskform from './styles_addtaskorm.module.css';

interface Task {
    taskId: number;
    taskName: string;
    taskCompleted: boolean;
}

interface AddTaskFormProps {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function AddTaskForm({ setTasks }: AddTaskFormProps) {
    const [inputData, setInputData] = useState('');

    function generateID() {
        return Math.floor(Math.random() * 3000);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!inputData) {
            alert('Preencha o nome da Task');
            return;
        }
        
        setTasks((prevState) => [ ...prevState, {
            taskId: generateID(),
            taskName: inputData,
            taskCompleted: false
        }]);
        setInputData('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles_addtaskform.form}>
            <input
                placeholder="Adicionar uma nova Tarefa"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
            />
            <button type="submit">
                Criar
                <FiPlusCircle />
            </button>
        </form>
    );
}