const screenWidth = document.documentElement.clientWidth / 3;
const container = document.querySelector('#container');
const sizeInput = document.querySelector('#size-input');
const setSizeBtn = document.querySelector('#size');
const gridlinesToggle = document.querySelector('#gridlines');
const colorButtons = document.querySelector('.colors');
const pointsOnAxis = 16;

let penColor = 'blue';
let penUp = false;

function createContainer(points) {
    gridlinesToggle.checked = false;
    const size = screenWidth / points;
    for (let i = 0; i < points; i++) {
        const row = document.createElement('div')
        row.classList.add('row');
        for (let j = 0; j < points; j++) {
            const square = document.createElement('div')
            square.classList.add('square');
            square.style.height = size.toString() + 'px';
            square.style.width = size.toString() + 'px';
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function destroyContainer() {
    const rows = container.querySelectorAll('.row');
    for (row of rows) {
        row.remove();
    }
}

createContainer(pointsOnAxis);

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('square') && penUp === false) {
        e.target.classList.add(penColor);
    }
})

setSizeBtn.addEventListener('click', () => {
    destroyContainer();
    createContainer(sizeInput.value)
})

colorButtons.addEventListener('click', (e) => {
    penColor = e.target.id
})


gridlinesToggle.addEventListener('change', () => {
    const squares = document.querySelectorAll('.square');
    for (square of squares) {
        square.classList.toggle('border');
    }
})

document.addEventListener('keydown', (e) => {
    const keyName = e.key;

    if (keyName === 'Control') {
        penUp = true;
    }
})

document.addEventListener('keyup', (e) => {
    const keyName = e.key;

    if (keyName === 'Control') {
        penUp = false;
    }
})
