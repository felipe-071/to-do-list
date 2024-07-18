import { Check } from './Check';
import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

export function Task({task}) {
    return (
        <li>
            <Check />

            <p>
                {task}
            </p>
            <button className={styles.trash}>
                <Trash size={18} />
            </button>

        </li>
    )
}