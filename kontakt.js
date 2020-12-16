const form = document.getElementById("form");
const namn = document.getElementById("namn");
const email = document.getElementById("email");
const meddelande = document.getElementById("meddelande");

// Klick submit event
form.addEventListener("submit", (e) => {
    e.preventDefault();

 checkInputs();  
});

//få values från inputs
function checkInputs(){
    const namnValue = namn.value.trim();
    const emailValue = email.value.trim();

    // om man klickar submit utan skriva något namn dyker det upp röd text
    if(namnValue === ""){
        setErrorFor(namn, "Namn får ej vara tomt")
    } else{
        setSuccessFor(namn);
    }

    //  om man klickar submit utan skriva email dyker det upp röd text
        if(emailValue === ""){
            setErrorFor(email, "Email får ej vara tomt")
            // om man skrivit fel email format
        } else if(!isEmail(emailValue)){
            setErrorFor(email, "Ange rätt email")
        } else {
            setSuccessFor(email);
        }

    } 


function setErrorFor(input, message){
    const formDiv = input.parentElement; // .form-div
    const small = formDiv.querySelector("small"); 
//lägger till error message i small taggarna
    small.innerText = message;

    formDiv.className = "form-div error";
}

function setSuccessFor(input) {
    const formDiv = input.parentElement;
    formDiv.className = "form-div success";
}
// måste ange rätt email typ annars dyker det upp varning
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//funktion för att skicka mejl i html form måste finnas action="MAILTO:kamiehurtig@gmail.com"
// function sendEmail(name, email, meddelande) {
//     email.send({
//         Host:"smtp.gmail.com",
//         Username: "kamiehurtig@gmail.com",
//         Password: ""
//     })
// }

// saveContactInfo(name, email, meddelande);

// document.querySelector(".form").reset();

// sendEmail(name,email, meddelande)