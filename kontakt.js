const userID = "ufO0_wig4VkETaUTU"
const serviceID = "service_xb1o8hg"
const templateID = "template_s2qra5u"

function sendEmail() {
    try {
        var name = document.getElementById("name")
        var email = document.getElementById("email")
        var message = document.getElementById("message")
        const emailData = {
            name: name.value,
            email: email.value,
            message: message.value,
        }

        var infoMessage = document.getElementsByClassName("info-message")[0];
        if (name && email && message) {
            emailjs.send(serviceID, templateID, emailData, userID);
            infoMessage.textContent = 'Tak for din mail!';
            name.value = null;
            email.value = null
            message.value = null
            console.log(name);
        } else {
            infoMessage.textContent = 'Udfyld venligst alle felter';
        }

    } catch (error) {
        console.log(error);
    }
}