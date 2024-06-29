import { Check } from './Check';
import styles from './Task.module.css';

export function Task() {
    return (
        <div className={styles.teste}>
            <Check />
            <p className={styles.taskDescription}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <span>trash</span>
        </div>
    )
}