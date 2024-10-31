let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('list-container');

const addTask = () => {
    if (inputBox.value === '') {
        alert('Enter Something in the given field!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
};

// Adding Checked and Delete functionality

listContainer.addEventListener('click', (e)=> {
    const target = e.target;
    if (target.matches('li')){
        target.classList.toggle('checked');
        saveData();
    } else if (target.matches('span')) {
        target.closest('li').remove();
        saveData();
    }
});

// Local Storage for storing

const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
};

const showData = () => {
    listContainer.innerHTML = localStorage.getItem('data');
};

showData();