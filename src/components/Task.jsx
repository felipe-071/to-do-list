import { Check } from './Check';
import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

export function Task() {
    return (
        <li>
            <button>
            
            </button>

            <p>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <div className={styles.trash}>
                <Trash size={18} />
            </div>

        </li>
    )
}