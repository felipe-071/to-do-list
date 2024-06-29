import viteLogo from '/vite.svg'
import './global.css'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import clipBoard from './assets/clipboard.svg';

import styles from './App.module.css'
import { Task } from './components/Task';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <AddTask />

        <div>
            <div className={styles.info}>

                <div className={styles.created}>
                    <p>Tarefas criadas</p> <span>10</span>
                </div>
                <div className={styles.done}>
                    <p>Concluídas</p> <span>10</span>
                </div>

            </div>

        
            <div className={styles.list}>
                {/* <img src={clipBoard} alt="" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span> */}
                <Task />
            </div>
        </div>

      </div>
    </div>
  )
}

export default App
