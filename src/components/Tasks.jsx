import clipBoard from '../assets/clipboard.svg';

import styles from './Tasks.module.css';

export function Tasks() {
    return (
        <div>
            <div class={styles.info}>

                <div className={styles.created}>
                    <p>Tarefas criadas</p> <span>10</span>
                </div>
                <div className={styles.done}>
                    <p>Concluídas</p> <span>10</span>
                </div>

            </div>

            <div className={styles.list}>
                <img src={clipBoard} alt="" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}