let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('list-container');

const  addTask = () => {
    if (inputBox.value === '') {
        alert('Add some Input Text!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    };
    inputBox.value = '';
    saveData();
};


listContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target.matches('LI')){
        target.classList.toggle('checked');
        saveData();
    } else if (target.matches('span')){
        target.closest('li').remove();
        saveData();
    };
});

// Local Storage saving

const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
}

const showData = () => {
    listContainer.innerHTML = localStorage.getItem('data');
}

showData();