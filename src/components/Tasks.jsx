import clipBoard from '../assets/clipboard.svg';

import styles from './Tasks.module.css';

export function Tasks(){
    return(
        <div>
            <div class={styles.align}>
                <p>Tarefas criadas <span>10</span></p>
                <p>Concluídas <span>10</span></p>
            </div>

            <div>
                <img src={clipBoard} alt="" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}