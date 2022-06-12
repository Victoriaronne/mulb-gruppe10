const userID = "ufO0_wig4VkETaUTU"; //Referer til vores bruger
const serviceID = "service_xb1o8hg"; //som referer til den specifikke mail "Gmail"
const templateID = "template_s2qra5u"; //Fordi man kan lave man forskellige template. Så referer den til en specikfik - Som forventer "specfikke"
//For at kunne bruge dem til vores konto, for at de ved at de er der de skal sendes til. 
//Laver 3 const som skal bruges af emailjs, som alle 3 er en string


function sendEmail() { //Laver funkton der hedder sent email 
    var name = document.getElementById("name"); //laver en variable der hedder "name" 
    // refererer til det html element der har id="name"
    var email = document.getElementById("email");//laver en variable der hedder "email"
    var message = document.getElementById("message");//laver en variable der hedder "message"
    //De henter et html element på baggrunds af dens id

    // Laver en konstant "email data", som indeholder værdierne for name, email og message fra html elementer
    // emailData er et "Object"
    const emailData = {
        name: name.value,
        email: email.value,
        message: message.value,
    }

    var infoMessage = document.getElementsByClassName("info-message")[0]; //refecerer fra html kontaktside 
    if (name.value && email.value && message.value) {
        emailjs.send(serviceID, templateID, emailData, userID); //Bruger emailjs til at sende mail, udfra vores konstanter vi har brugt længere oppe
        infoMessage.textContent = 'Tak for din mail!'; //sætter bare tekst indholdet for vore html tekst indhold 
        name.value = null; //for at slette de som tidligere har skrevet
        email.value = null;
        message.value = null;
    } else {
        infoMessage.textContent = 'Udfyld venligst alle felter'; //sætter bare tekst indholdet for vore html tekst indhold 
    }   
}

//Const kan ikke ændres, men det kan en variabel 
//F.eks.