import viteLogo from '/vite.svg'
import './global.css'
import { Header } from './components/Header'

import clipBoard from './assets/clipboard.svg';

import styles from './App.module.css'
import { Task } from './components/Task';
import { useState } from 'react';

export default function App() {
  const [task, setTask] = useState();
  const [tasksList, setNewTasksList] = useState([]);

  // function createTask(e) {
  //   e.preventDefault()
  //   const conteudo = task;
  //   console.log(task)
  // }



  function addNewTask(event) {
    event.preventDefault()
    const content = event.target.value
    if (!content) {
      return
    }
    setTask(content)
    console.log(event.target.value)


  }

  function createNewTask(event) {
    event.preventDefault()
    if (task == null) {
      return
    }

    setNewTasksList([...tasksList, task])
    var el = document.getElementsByName('addTask')
    el[0].value = null
    // if(el[0].value)
    // const data = new FormData

    // const task2 = data.get('addTask')

    // if(task2 != null){
    //   task2.toString()
    // }
    // console.log(task2)
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <form>
          <input className={styles.addTask}
            type="text"
            name="addTask"
            placeholder="Adicione uma nova tarefa"
            onChange={addNewTask}
            required
          />

          <input
            className={styles.submit}
            type="submit"
            value="Criar +"
            onClick={createNewTask}
          />
        </form>


        <div className={styles.info}>

          <div className={styles.created}>
            <p>Tarefas criadas</p>
            <span>{tasksList.length}</span>
          </div>
          <div className={styles.done}>
            <p>Concluídas</p> {tasksList.length > 0 ? (
              <span>0 de {tasksList.length}</span>
            ) : (
              <span>0</span>
            )

            }
          </div>

        </div>




        {tasksList.length > 0 ? (
          tasksList.map((task) => {
            
            return (
              <Task
                key={task}
                task={task} />
            )
          })

        ) : (
          <div className={styles.listIsEmpty}>
             <img src={clipBoard} alt="" />
            <div className={styles.isEmptyWarning}>
              <span>
                <b>Você ainda não tem tarefas cadastradas</b> <br />
              Crie tarefas e organize seus itens a fazer</span>
            </div>

          </div>
        )}


      </div>
    </div>
  )
}

// export default App
