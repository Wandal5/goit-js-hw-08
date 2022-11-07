import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};


const formEl = document.querySelector('form');
// console.log(formEl);
const emailEl = document.querySelector('input');
// console.log(emailEl);
const textareaEl = document.querySelector('textarea');
// console.log(textareaEl);
const buttonEl = document.querySelector('button');
// console.log(buttonEl);


formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onformEl, 500));

// emailEl.addEventListener('input', onEmailEl);

fillForm();


function onFormSubmit(e) {
    e.preventDefault();
    formData.email = formEl.elements.email.value;
    formData.message = formEl.elements.message.value;

    console.log(formData);

    formEl.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onformEl(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    // console.log(formData);
};

function fillForm() {
    const savedForm = localStorage.getItem(STORAGE_KEY);
    if (savedForm) {
        const parceSavedForm = JSON.parse(savedForm);
        // console.log(parceSavedForm);
        for (const prop in parceSavedForm) {
        if (parceSavedForm.hasOwnProperty(prop)) {
            // console.log(parceSavedForm[prop]);
            formEl.elements[prop].value = parceSavedForm[prop];
            formData[prop] = parceSavedForm[prop];
        }
    }
    }  
};
