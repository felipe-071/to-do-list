import viteLogo from '/vite.svg'
import './global.css'
import { Header } from './components/Header'

import clipBoard from './assets/clipboard.svg';

import styles from './App.module.css'
import { Task } from './components/Task';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <div className={styles.taskInputs}>
          <input className={styles.addTask} type="text" name="addTask" placeholder="Adicione uma nova tarefa" required />
          <input className={styles.submit} type="submit" value="Criar +" />
        </div>

       
          <div className={styles.info}>

            <div className={styles.created}>
              <p>Tarefas criadas</p> <span>10</span>
            </div>
            <div className={styles.done}>
              <p>Concluídas</p> <span>10</span>
            </div>

          </div>

          <ul>
            <Task />
          </ul>
  

      </div>
    </div>
  )
}

export default App
