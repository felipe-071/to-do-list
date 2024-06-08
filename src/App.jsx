import viteLogo from '/vite.svg'
import './global.css'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'

import styles from './App.module.css'

function App() {

  return (
    <div>
      <div className={styles.divBg}></div>
        <Header />
        <AddTask />
      </div>
  )
}

export default App
