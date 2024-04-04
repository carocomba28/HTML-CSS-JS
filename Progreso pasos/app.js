const progreso = document.getElementById('progreso');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
const circulos = document.querySelectorAll('.circle');

let actual = 1;

siguiente.addEventListener('click', () => {
    actual++;
    if (actual > circulos.length) {
        actual = circulos.length;
    }
    update();
});

anterior.addEventListener('click', () => {
    actual--;
    if (actual < 1) {
        actual = 1;
    }
    update();
});

function update() {
    circulos.forEach((circulo, index) => {
        if (index < actual) {
            circulo.classList.add('active');
        } else {
            circulo.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

    progreso.style.width = (actives.length - 1) / (circulos.length - 1) * 100 + '%';

    if (actual === 1) {
        anterior.disabled = true;
    } else if (actual === circulos.length) {
        siguiente.disabled = true;
    } else {
        anterior.disabled = false;
        siguiente.disabled = false;
    }
}