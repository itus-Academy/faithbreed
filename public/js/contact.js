
const defaultText = document.getElementById('defaultText');
const success  = document.getElementById('success');



const contactPost = document.getElementById('contactPost');
contactPost.addEventListener('submit', submitContactForm);

function submitContactForm(e){
    e.preventDefault();
    const contactName = getInput("contactName");
    const contactEmail = getInput("contactEmail");
    const contactNumber = getInput("contactNumber");
    const contactMessage = getInput("contactMessage");
    console.log(contactName + " " + contactEmail + " " + contactNumber + " "  + contactMessage  );     
    saveMessage(contactName, contactEmail, contactNumber, contactMessage)
}

function getInput(name){
    return document.getElementById(name).value;
}

function saveMessage(contactName, contactEmail, contactNumber, contactMessage){
    db.collection('contactUs').add({
        contactName:contactName,
        contactEmail: contactEmail,
        contactNumber:contactNumber,
        contactMessage:contactMessage
    }).then(function(){
        defaultText.style.display = 'none' ;
        success.style.display = 'block';
    })
}


