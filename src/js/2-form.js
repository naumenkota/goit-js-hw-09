const formData = {
    email: "",
    message: ""
};


const form = document.querySelector('form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea')
    
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
     formData.email = savedData.email;
    formData.message = savedData.message;
    input.value = savedData.email;
    textarea.value = savedData.message;   
}

form.addEventListener("submit", event => {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert ('Fill please all fields')
    } else { 
        console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = "";
    formData.message = "";
     form.reset();}
});
    