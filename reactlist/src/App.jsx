import { useState } from 'react'
import './App.css'
import penIcon from "./assets/Vector.svg"
import trashIcon from "./assets/mynaui_trash.svg"

function App() {
  // States / Variaveis
  const [taskList, setTaskList] = useState([
    { id: 1, description: "Revisar HTML" },
    { id: 2, description: "Revisar CSS" },
    { id: 3, description: "Revisar ReactJS" },
    { id: 4, description: "Aprender React Native" }
  ])

  //

  return (
    <>
      <header className='header-section'>
        <h1 className='header-section__title'> React List </h1>
      </header>

      <main className='body-section'>
        <form className='cad-task'>
          <input className='cad-task__entry' type="text" placeholder='Adicione uma tarefa' />
          <button className='cad-task__btn-confirm'>Adicionar</button>
        </form>
        <section className='cardlist'>

          {
            taskList.map((t) => {
              return (
                <article className='cardtask'>
                  <p className='cardtask__task-text'>{t.description}</p>

                  <div className='cardtask__icon-box'>
                    <div className='cardlist__icon'> <img src={penIcon} alt="Editar" /></div>
                    <div className='cardlist__icon'> <img src={trashIcon} alt="Excluir" /></div>
                  </div>
                </article>
              )
            })
          }

        </section>
      </main>

      <footer className='footer-list'>
        <p className='footer-list__right-text'> 2026, React List - Todos os direitos reservados </p>
      </footer>

    </>
  )
}

export default App
