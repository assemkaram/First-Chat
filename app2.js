let nameregex=/^[A-Z][a-z]{3,20}$/
let dateregex=/^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/
let emailregex=/^[a-z][A-Za-z0-9\$%]{2,}(@gmail.com)$/
let passregex=/[a-zA-z0-9!@#$%^&*()_+]{8,}/
let phoneregex=/^(01)[1250][0-9]{8}$/

let firstName=document.querySelector("#fn");
let divFn=document.querySelector(".fn-valid");

let lastName=document.querySelector("#ln");
let divLn=document.querySelector(".ln-valid");

let birthDate=document.querySelector("#BD");
let divBd=document.querySelector(".bd-valid");

let email=document.querySelector("#email");
let divEm=document.querySelector(".em-valid");

let pass=document.querySelector("#passwrod");
let divpass=document.querySelector(".ps-valid");

let passcon=document.querySelector("#con-password");
let divpasscon=document.querySelector(".psc-valid");

let phone=document.querySelector("#phone")
let divph=document.querySelector(".phone-valid")

let form=document.querySelector(".fff");
firstName.addEventListener("input",()=>{
    if(nameregex.test(firstName.value)){
        divFn.innerHTML=`
            <p class="valid"><i class="fa-solid fa-check"></i> Valid First name</p>
        `
    } else {
        divFn.innerHTML=`
            <p class="invalid"><i class="fa-solid fa-circle-xmark"></i> First name must start with capital letter</p>
            <p class="invalid"><i class="fa-solid fa-circle-xmark"></i> only letters</p>
            <p class="invalid"><i class="fa-solid fa-circle-xmark"></i> have no space</p>
            <p class="invalid"><i class="fa-solid fa-circle-xmark"></i> more than 2 letters</p>
        `
    }
}) 

lastName.addEventListener("input",()=>{
    if(nameregex.test(lastName.value)){
        divLn.innerHTML=`
            <p class="valid"><i class="fa-solid fa-check"></i> Valid Last name</p>
        `
    } else {
        divLn.innerHTML=`
            <p class="invalid"><i class="fa-solid fa-circle-xmark"></i> First name must start with capital letter</p>
            <p class="invalid"><i class="fa-solid fa-circle-xmark"></i> only letters</p>
            <p class="invalid"><i class="fa-solid fa-circle-xmark"></i> have no space</p>
            <p class="invalid"><i class="fa-solid fa-circle-xmark"></i> more than 2 letters</p>
        `
    }
}) 

birthDate.addEventListener("input",()=>{
    if(dateregex.test(birthDate.value)){
        divBd.innerHTML=`
            <p class="valid"><i class="fa-solid fa-check"></i> Valid Birth date</p>
        `
    } else {
        divBd.innerHTML=`
            <p class="invalid"><i class="fa-solid fa-circle-xmark"></i> birth date must be in form yyyy/mm/dd</p>
        `
    }
})

email.addEventListener("input",()=>{
    if(emailregex.test(email.value)){
        divEm.innerHTML=`
            <p class="valid"><i class="fa-solid fa-check"></i> Valid Email</p>
        `
    } else {
        divEm.innerHTML=`
            <p class="invalid"><i class="fa-solid fa-circle-xmark"></i> Email must start with small letters</p>
            <p class="invalid"><i class="fa-solid fa-circle-xmark"></i> have only letters and special chars<p>
            <p class="invalid"><i class="fa-solid fa-circle-xmark"></i> have no space</p>
        `
    }
})

pass.addEventListener("input",()=>{
    var p =pass.value;
    if(passregex.test(pass.value)){
        divpass.innerHTML=`
            <p class="valid"><i class="fa-solid fa-check"></i> Valid Password</p>
        `
    } else {
        divpass.innerHTML=`
            <p class="invalid"><i class="fa-solid fa-circle-xmark"></i> Must include 8 characters and digits</p>
            <p class="invalid"><i class="fa-solid fa-circle-xmark"></i> have no space</p>
        `
    }
})

passcon.addEventListener("input",()=>{
    if(pass.value==passcon.value){
        divpasscon.innerHTML=`
            <p class="valid"><i class="fa-solid fa-check"></i> Correct password</p>
        `
    } else {
        divpasscon.innerHTML=`
            <p class="invalid"><i class="fa-solid fa-circle-xmark"></i> Not correct password</p>
        `
    }
})

phone.addEventListener("input",()=>{
    if(phoneregex.test(phone.value)){
        divph.innerHTML=`
            <p class="valid"><i class="fa-solid fa-check"></i> Valid phone</p>
        `
    } else {
        divph.innerHTML=`
            <p class="invalid"><i class="fa-solid fa-circle-xmark"></i>The number must start 01 and be 11 digit</p>
        `
    }
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(pass.value==passcon.value && nameregex.test(firstName.value) && nameregex.test(lastName.value) && dateregex.test(birthDate.value) && emailregex.test(email.value) && passregex.test(pass.value) && phoneregex.test(phone.value)){
        window.location.href="index-2.html";
    }
})
