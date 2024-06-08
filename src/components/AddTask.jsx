import styles from './AddTask.module.css';

export function AddTask(){
    return(
        <div className={styles.taskInputs}>
            <input className={styles.addTask} type="text" name="addTask" placeholder="Adicione uma nova tarefa" />
            <input className={styles.submit} type="submit" value="Criar +"/>
        </div>
    )
}