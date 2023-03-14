// lodash throttle library
import throttle from 'lodash.throttle';

// Dom Elements
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");

// added required value for DOM Elerment
input.setAttribute("required", true);
textarea.setAttribute("required", true);
// Obj value local storage 
let formData = {};

// function checking if the value is in local storage
function getValueLocalStorage() {

    const info = JSON.parse(localStorage.getItem("feedback-form-state"));
    
    if (info) {
        const {email, message } = info;
        if (email) {
            input.value = email;
            formData.email = email;
        }

        if (message) {
            textarea.value = message;
            formData.message = message;
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
    // reset standart settings    
    e.preventDefault();
    // reset form info
    e.currentTarget.reset();
    // delete local storage
    localStorage.removeItem("feedback-form-state");
    // return obj 
    console.log(formData);
    // delete obj
    formData = {};
}


