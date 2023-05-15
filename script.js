
const nameInput = document.querySelector("#first-name");
const email = document.querySelector("#email");
const button = document.querySelector(".button");
const errorEmail = document.querySelector(".errorEmail");
const errorFirst = document.querySelector(".errorFirst");
const lastName = document.querySelector("#last-name");
const errorLast = document.querySelector(".errorLast");
const password = document.querySelector("#password");
const errorPassword = document.querySelector(".errorPassword");
const iconFirst = document.querySelector(".iconFirst");
const iconLast = document.querySelector(".iconLast");
const iconEmail = document.querySelector(".iconEmail");
const iconPass = document.querySelector(".iconPass");
let nameText 
let inputMail
let lastText
let passInput

nameInput.addEventListener("input" , function(){
    nameText = nameInput.value ;
    console.log(nameText);
})

lastName.addEventListener("input" , function(){
    lastText = lastName.value ;
    console.log(lastText);
})


email.addEventListener("input" , function(){
    inputMail = email.value ;
    console.log(nameText);
})

password.addEventListener("input" , function(){
    passInput = password.value ;
    console.log(passInput);
})


button.addEventListener("click" , function(){
    let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailValid = mailRegex.test(inputMail);
    console.log(emailValid);
    if(emailValid === false){
        email.style.borderColor = "#FF7979";
        errorEmail.style.display = "block";
        iconEmail.style.display = "block";
    }else{
        email.style.borderColor = "#5E54A4";
        errorEmail.style.display = "none";
        iconEmail.style.display = "none";
    }
    if(nameText === undefined){
        errorFirst.style.display = "block";
        nameInput.style.borderColor = "#FF7979";
        iconFirst.style.display = "block";
    }else{
        errorFirst.style.display = "none";
        nameInput.style.borderColor = "#5E54A4";
        iconFirst.style.display = "none";
    }
    if(lastText === undefined){
        lastName.style.borderColor = "#FF7979";
        errorLast.style.display = "block";
        iconLast.style.display = "block";
    }else{
        lastName.style.borderColor = "#5E54A4";
        errorLast.style.display = "none";
        iconLast.style.display = "none";
    }
    if(passInput === undefined){
        password.style.borderColor = "#FF7979";
        errorPassword.style.display = "block";
        iconPass.style.display = "block";
    }else{
        password.style.borderColor = "#5E54A4";
        errorPassword.style.display = "none";
        iconPass.style.display = "none";
    }
   
})

