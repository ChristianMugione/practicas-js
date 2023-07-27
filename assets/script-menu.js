const sectionContador = document.getElementById('contador');
const sectionTateti = document.getElementById('tateti');
const sectionPpt = document.getElementById('section-ppt');
const sectionClima = document.getElementById('clima');
const sectionTodolist = document.getElementById('todolist');
const sectionCalc = document.getElementById('calc');

const btnContador = document.getElementById('btn-contador');
const btnTateti = document.getElementById('btn-tateti');
const btnPpt = document.getElementById('btn-section-ppt');
const btnClima = document.getElementById('btn-clima');
const btnTodolist = document.getElementById('btn-todolist');
const btnCalc = document.getElementById('btn-calc');

const sectionsOff = () => {
    sectionContador.style.display = 'none';
    sectionTateti.style.display = 'none';
    sectionPpt.style.display = 'none';
    sectionClima.style.display = 'none';
    sectionTodolist.style.display = 'none';
    sectionCalc.style.display = 'none';
}

function sectionOn(event) {
    sectionsOff();
    
    console.log(event.target.id);
    switch(event.target.id) {
        case 'btn-contador': sectionContador.style.display = 'flex';
        break;
        case 'btn-tateti': sectionTateti.style.display = 'flex';
        break;
        case 'btn-section-ppt': sectionPpt.style.display = 'flex';
        break;
        case 'btn-clima': sectionClima.style.display = 'flex';
        break;
        case 'btn-todolist': sectionTodolist.style.display = 'flex';
        break;
        case 'btn-calc': sectionCalc.style.display = 'flex';
        break;        
    }


    // .style.display = 'flex';
};


btnContador.addEventListener('click', sectionOn);
btnTateti.addEventListener('click', sectionOn);
btnPpt.addEventListener('click', sectionOn);
btnClima.addEventListener('click', sectionOn);
btnTodolist.addEventListener('click', sectionOn);
btnCalc.addEventListener('click', sectionOn);