const container = document.querySelector('#container');
const pixelColor = 'red'
const pointsOnAxis = 16;

for (let i = 0; i < pointsOnAxis; i++) {
    const row = document.createElement('div')
    row.classList.add('row');
    for (let j = 0; j < pointsOnAxis; j++) {
        const square = document.createElement('div')
        square.classList.add('square');
        row.appendChild(square);
    }
    container.appendChild(row);
}

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('square')) {
        // e.target.style.backgroundColor = pixelColor;
        e.target.classList.add('blue');
    }
})