import { use, useEffect, useState } from 'react'
import './App.css'
import penIcon from "./assets/Vector.svg"
import trashIcon from "./assets/mynaui_trash.svg"
import axios from 'axios'

function App() {
  // States / Variaveis
  const [taskList, setTaskList] = useState([]);
  const [taskValue, setTaskValue] = useState("");
  const [editMode, setEditMode] = useState(null);

  //Funçao

  //CRUD - Create - Read - Update - Delete
  //Get - busca todas as taferas
  const getTasks = async () => {
    try {
      //Retorna a requisição
      const APIReturn = await axios.get("http://localhost:3000/taskpoint")
      const APIData = await APIReturn.data

      //atualiar o state
      setTaskList(APIData)

    } catch (error) {
      console.log(error);
    }

  }

  //Get {id} - busca todas as taferas
  const getTaskById = async (id) => {
    alert(`Função getTaskById em Desenvolvimento ${id}`)

  }


  //Post - 
  const postTask = async (e) => {
    e.preventDefault();

    if (taskValue.trim() === "") {
      alert("Preencha o campo.");
      return;
    }

    try {
      if (editMode) {
        // UPDATE
        await axios.put(`http://localhost:3000/taskpoint/${editMode.id}`, {
          ...editMode,
          descricao: taskValue,
        });

        alert("Tarefa atualizada!");
        setEditMode(null);

      } else {
        // CREATE
        await axios.post("http://localhost:3000/taskpoint", {
          descricao: taskValue,
        });

        alert("Tarefa cadastrada!");
      }

      setTaskValue("");
      getTasks();

    } catch (error) {
      console.log(error);
      alert("Erro ao salvar a tarefa.");
    }
  };

  // Put - prepara a edição
  const putTask = (item) => {
    setEditMode(item);
    setTaskValue(item.descricao);
  }

  // Cancela a edição
  const cancelEdit = () => {
    setEditMode(null);
    setTaskValue("");
  }

  //Delete -
  const deleteTask = async (id) => {
    const querExcluir = window.confirm(`Tem certeza que deseja excluir esta tarefa ?`);

    if (!querExcluir) {
      return false
    }

    try {
      await axios.delete(`http://localhost:3000/taskpoint/${id}`);

      // Atualiza a lista
      getTasks();
    } catch (error) {
      console.log(error);
      alert("Erro ao excluir a tarefa");
    }
  }


  //Effects e ciclos de vida do componente
  //onMount - quando o componente for montado
  useEffect(() => {
    //carrega os dados quando o componente for montado!
    getTasks()
  }, [])


  //JSX
  return (
    <>
      <header className='header-section'>
        <h1 className='header-section__title'> React List </h1>
      </header>

      <main className='body-section'>
        <form className='cad-task' onSubmit={postTask}>
          <input
            className='cad-task__entry'
            type="text"
            placeholder={
              editMode
                ? "Edite a tarefa..."
                : "Adicione uma tarefa"
            }
            value={taskValue}
            onChange={(e) => {
              setTaskValue(e.target.value)
            }}
          />

          <div className="cad-task__buttons">
            <button className='cad-task__btn-confirm'>
              {editMode ? "Salvar Alterações" : "Adicionar"}
            </button>

            {editMode && (
              <button
                type="button"
                className="cad-task__btn-cancel"
                onClick={cancelEdit}
              >
                Cancelar
              </button>
            )}
          </div>
        </form>
        <section className='cardlist'>

          {
            taskList.map((t) => {
              return (
                <article className='cardtask' key={t.id}>
                  <p className='cardtask__tasc-text'>
                    {t.descricao}
                  </p>

                  <div className='cardtask__icon-box'>
                    <div className='cardlist__icon-edit'> <img
                      src={penIcon}
                      className='cardlist__edit-icon'
                      alt="Imagem de um lápis. Função de editar a tarefa"
                      onClick={() => {
                        putTask(t)
                      }}
                    />
                    </div>

                    <div className='cardlist__icon-trash'> <img
                      src={trashIcon}
                      className="cardlist __trash-icon"
                      alt="imagem de uma lixeira. Funcao de excluir a tarefa"
                      onClick={() => {
                        deleteTask(t.id)
                      }}
                    />
                    </div>
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
