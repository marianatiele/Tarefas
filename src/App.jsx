import './App.css';
// import './function.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tarefas - React</h1>
      </header>
      <main className='container'>
      
        <div className='form'>
            <div className='form-goup'>
            <h2>Tarefas</h2>
            </div>
            <div className='form-goup'>
                <label >Título: </label>
                <input id='title' type='text' placeholder='Titulo da tarefa' />
            </div>
            
            <div className='form-goup'>
              <label >Dificuldade: </label>
              <input id='dif' type='number' placeholder='7'/>
            </div>
            <div className='form-goup'>
            <button className='label-fim' id='confirm-button'>Criar Tarefa</button>
            </div>
        
            <div class="results">
            <h2>Resultado</h2>
            <table id="student-table">
                  <tr>
                      <th id="matricula-header">Título </th> 
                      <th id="nome-header">Dificuldade </th> 
                      
                    </tr>
          
            </table>
        </div>
          </div>
      </main>
      <footer>
        <h3>Tarefas - React &copy;  2023</h3>
      </footer>
    </div>
  );
}

export default App;
