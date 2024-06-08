import viteLogo from '/vite.svg'
import './global.css'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { Tasks } from './components/Tasks'

import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <AddTask />
        <Tasks />

      </div>
    </div>
  )
}

export default App
