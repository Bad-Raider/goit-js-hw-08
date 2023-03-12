// lodash throttle library
import throttle from 'lodash.throttle';

// Dom Elements
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");

// Obj value local storage 
const formData = {};

// function checking if the value is in local storage
function getValueLocalStorage() {

    const info = JSON.parse(localStorage.getItem("feedback-form-state"));
    
    if (info) {
        
        if (info.email) {
            input.value = info.email;
        }
        if (info.message) {
            textarea.value = info.message;
        }
    }
};
//  call function
getValueLocalStorage();

// input value and handler
form.addEventListener("input", throttle(handleValueElementForm, 500));
function handleValueElementForm(e) {
    formData[e.target.name] = e.target.value;
    
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

// submit form and handler
form.addEventListener("submit", handlerSubmitButton);
function handlerSubmitButton(e) {
   
    e.preventDefault();

    e.currentTarget.reset();

    console.log(formData);

    localStorage.removeItem("feedback-form-state");
}


