const codigos = document.querySelectorAll(".input-codigo");
const btn = document.querySelector(".btn");

codigos[0].focus();

codigos.forEach((codigo, index) => {
    codigo.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codigos[index].value = ''
            setTimeout(() => codigos[index + 1].focus(), 10)
        } else if (e.key === 'Backspace') {
            setTimeout(() => codigos[index - 1].focus(), 10)
        }
    })
})

btn.addEventListener('click', (e) => {
    if (codigos[5].value === '') {
        alert('Por favor, introduzca el código de 6 dígitos')
    } else {
        codigos.forEach(codigo => {
            codigo.value = ''
        })
        alert('Cuenta verificada correctamente')
    }
})