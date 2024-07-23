import { Check } from './Check';
import style from './Check.module.css';
import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

export function Task({ task, setNewTasksList, tasksList }) {
    return (
        <li>
            <div>
                <button className={style.checkAppearence}></button>
            </div>

            <p>{task}</p>
            <button className={styles.trash} onClick={
                () => {
                    setNewTasksList(
                        tasksList.filter(eachTask => eachTask !== task))
                    console.log(task)
                }}>
                <Trash size={18} />
            </button>
        </li>
    )
}