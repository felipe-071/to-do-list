import './global.css'
import styles from './App.module.css'
import clipBoard from './assets/clipboard.svg';

import { Header } from './components/Header'
import { Task } from './components/Task';
import { useState } from 'react';


export default function App() {
  const [task, setTask] = useState();
  const [tasksList, setNewTasksList] = useState([]);
  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState(false)


  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  }

  function addNewTask(event) {
    const content = event.target.value
    setTask(content)
  }

  function createTask(event) {
    event.preventDefault()

    const form = document.getElementById("tasks-form")
    const data = new FormData(form)
    const taskField = data.get('addTask')

    if (!taskField) {
      return
    }

    setNewTasksList([task, ...tasksList])
    form.reset()
  }

  return (
    <div>

      {isDeleteTaskModalOpen && (
        <div className={styles.modalBg}>
          <div className={styles.modalContainer}>
            <span>Tem certeza que deseja <b>excluir</b> esta tarefa?</span>
            <div>
              <button>Não</button>
              <button onClick={() => {
                setNewTasksList(
                  tasksList.filter(eachTask => eachTask !== task))
                console.log(task)
                // setNewTasksList(
                //     tasksList.filter(teste => teste.index !== task.index)
                // )
              }}>Sim</button>
            </div>
          </div>
        </div>
      )}
      <Header />

      <div className={styles.wrapper}>

        <form id="tasks-form">
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
            onClick={createTask}
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

        <div className={styles.tasksContainer}>

          {tasksList.length > 0 ? (

            tasksList.map((task, index) => {

              return (
                <Task
                  key={generateKey(task)}
                  task={task}
                  tasksList={tasksList}
                  setNewTasksList={setNewTasksList}
                />
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
    </div>
  )
}

// export default App
