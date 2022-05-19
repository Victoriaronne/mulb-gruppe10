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

        if (name && email && message) {
            emailjs.send(serviceID, templateID, emailData, userID);
            (console.log)('Email Sent!')
        } else {
            console.log('INVALID - Email NOT Sent!')
        }

    } catch (error) {

        console.log(error)
    }

}

document
    .getElementById("kontakt")
    .addEventListener("submit", validateform)

const templateParams = {};

function validateform(event){
    event.preventDefault();
    console.log("submitted");
    const elements = document.getElementsByClassName('need-validation');
    console.log(elements)
    for(let element of elements){
        if (element.type =="text" || element.type == "textarea") {
            textvalidation(element);
        } else if (element.type == "email") {
            emailValidation(element);
        }
    }
}

const errorElements = document.getElementsByClassName("validaiont-error")
console.log("errorElements", errorElements);
if (errorElements.length == 0) {
    emailjs.send(
        "service_xb1o8hg",
        "template_s2qra5u",
        templateParams,
        "ufO0_wig4VkETaUTU"
    );
}
