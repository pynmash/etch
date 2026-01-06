const container = document.querySelector('#container');
const pointsOnAxis = 100;

function createContainer(points) {
    const size = 800 / points;
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

createContainer(pointsOnAxis);

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('square')) {
        // e.target.style.backgroundColor = pixelColor;
        e.target.classList.add('blue');
    }
})