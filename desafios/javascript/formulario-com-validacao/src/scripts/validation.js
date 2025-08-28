const formGroups = document.querySelectorAll('.form-group');
const btn = document.getElementById('btn-enviar');

btn.addEventListener('click', () => validateForm());

formGroups.forEach(formGroup => {
    const input = formGroup.querySelector('input, textarea');
    const span = formGroup.querySelector('.form-error');
    input.addEventListener('input', () => setSuccess(input, span));

    input.addEventListener('blur', (event) => hasValue(event));
});

function isEmpty(value) {
    return value.trim() === "";
}

function setSuccess(input, span) {
    input.classList.remove('error')
    span.classList.remove('error')

    input.classList.add('success')
}

function hasValue(event) {
    if (isEmpty(event.target.value)) {
        event.target.classList.remove('success')
    }
}

function validateForm() {
    formGroups.forEach(formGroup => {
        const input = formGroup.querySelector('input, textarea');
        const span = formGroup.querySelector('.form-error');
        if (isEmpty(input.value)) {
            input.classList.add('error');
            span.classList.add('error');
        }
    })
}