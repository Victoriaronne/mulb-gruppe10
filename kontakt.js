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
            console.log('Email Sent!')
        } else {
            console.log('INVALID - Email NOT Sent!')
        }

    } catch (error) {

        console.log(error)
    }
}


