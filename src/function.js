const button = document.getElementById('confirm');
const studentTable = document.getElementById('student-table');

function addrow(titulo, dificuldade){
    
    const newRow = studentTable.insertRow(-1); //-1 0 1
    const celTitulo  = newRow.insertCell(0);
    const celDificuldade = newRow.insertCell(1);
  
    celTitulo.innerHTML = titulo;
    celDificuldade.innerHTML = dificuldade;

}

function addTarefa(){
    alert('Add uma tarefa');
    const titulo = document.getElementById('title').value;
    const dificuldade = document.getElementById('dif').value;
   
    addrow(titulo, dificuldade);
    // document.getElementById('title').value = '';
    // document.getElementById('dif').value = '';
}

//addEventListener aguarda um evento
button.addEventListener('click', addTarefa);