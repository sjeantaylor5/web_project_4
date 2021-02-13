function showErrorMessage(input, form, { errorClass, inputErrorClass, ...rest }) {
    const error = document.querySelector("#" + input.id + "-error");
    error.textContent = input.validationMessage;

    error.classList.add(errorClass);
    input.classList.add(inputErrorClass);
}

function hideErrorMessage(input, form, { errorClass, inputErrorClass, ...rest }) {
    const error = document.querySelector("#" + input.id + "-error");
    error.textContent = "";

    error.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
}

function checkInputValidity(input, form, rest) {
    if (!input.validity.valid) {
        showErrorMessage(input, input.validationMessage, form, rest);
    } else {
        hideErrorMessage(input, form, rest);
    }
}

function hasInvalidInput(inputs) {
    return inputs.some((input) => {
        return !input.validity.valid;
    });
}

function toggleButtonState(inputs, button, { inactiveButtonClass, ...rest }) {

    if (hasInvalidInput(inputs)) {
        button.classList.add(inactiveButtonClass);
        button.disabled = true;
    } else {
        button.classList.remove(inactiveButtonClass);
        button.disabled = false;
    }
}

function enableValidation({ formSelector, inputSelector, submitButtonSelector, ...rest }) {
    const forms = [...document.querySelectorAll(formSelector)];

    forms.forEach((form) => {
        form.addEventListener("submit", ((evt) => {
            evt.preventDefault();
        }))

        const inputs = [...form.querySelectorAll(inputSelector)];
        const button = form.querySelector(submitButtonSelector);

        inputs.forEach((input) => {
            input.addEventListener("input", () => {
                checkInputValidity(input, form, rest);
                toggleButtonState(inputs, button, rest);
            })
        })

    })

}

enableValidation({
    formSelector: ".popup__container",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
});