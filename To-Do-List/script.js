const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container')

const addTask = () => {
    if (inputBox.value === ''){
        alert('Type in the Field to add something!');
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}


listContainer.addEventListener('click', (e) => {
    const target = e.target
    if(target.matches('li')) {
        target.classList.toggle('checked');
        saveData();
    }else if(target.matches('span')) {
        target.closest('li').remove();
        saveData();
    }
});

const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
};

const showTask = ()=> {
    listContainer.innerHTML = localStorage.getItem('data');
};

showTask();

