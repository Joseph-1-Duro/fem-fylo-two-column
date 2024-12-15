const firstForm = document.getElementById('form-1');
const secondForm = document.getElementById('form-2');
const firstEmailField = document.getElementById('email-1')
const secondEmailField = document.getElementById('email-2')

firstForm.addEventListener('submit', (e) => {
    let isValid = true;

    if (!validateEmail(firstEmailField)) {
        isValid = false;
        showError(firstEmailField)
    } else {
        removeError(firstEmailField)
    }

    !isValid && e.preventDefault()
})

secondForm.addEventListener('submit', (e) => {
    let isValid = true;

    if (!validateEmail(secondEmailField)) {
        isValid = false;
        showError(secondEmailField)
    } else {
        removeError(secondEmailField)
    }

    !isValid && e.preventDefault()
})



function validateEmail (field) {
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    return pattern.test(field.value)
}

function showError (field) {
    field.classList.add('error')
    let parent = field.parentNode;

    const errorMessage = Array.from(parent.children).find(
        (child) => child.classList.contains('error-message')
    );

    errorMessage.style.display = 'block'
}

function removeError (field) {
    field.classList.remove('error')
    let parent = field.parentNode;

    const errorMessage = Array.from(parent.children).find((child) => child.classList.contains('error-message'))

    errorMessage.style.display = 'none'
}