// console.log(fields);

// function isNotEmpty(value){
//     if (value == null || typeof value == 'undefined') return false;

//     return (value.length >0);
// 

const userID = "ufO0_wig4VkETaUTU"
const serviceID = "service_xb1o8hg"
const templateID = "template_s2qra5u"

function sendEmail() {
    try {
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const message = document.getElementById("message").value
        const emailData = {
            name: name,
            email: email,
            message: message,
        }
    
        emailjs.send(serviceID, templateID, emailData, userID);

        console.log('Email Sent!')
    } catch (error) {

        console.log(error)
    }
}

document
.getElementById("contact-form")
.addEventListener("submit, validateForm");
const templaeParams = {};

    function validateForm(event){
        event.preventDefault();
        console.log(submitted);
        const elements = document.getElementsByClassName("need-validation");
        console.log(elements);
        for (let element of elements)
        if (element.type == "text" || element.type == "textarea"){
            textValidation(element);
        } else if (element.type == "email"){
            emailValidation(element);
        }
    }
