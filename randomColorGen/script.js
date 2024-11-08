const generateRandomColor = () => {
    let color = '#';
    for (let i = 0; i<6; i++){
        color += Math.floor(Math.random() * 16).toString(16);
    }

    return color;
}

function setBackgroudColor(){
    document.body.style.backgroundColor = generateRandomColor();
}