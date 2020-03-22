


const submitPartnership = document.getElementById('submitPartnership');
submitPartnership.addEventListener('submit', submittingform);

function saveMessages(fullname,address,city,telephone, email){
    db.collection('partnership').add({
        fullname:fullname,
        address: address,
        city:city,
        telephone:telephone,
        email:email

    }).then(function(){
        // defaultText.style.display = 'none' ;
        // success.style.display = 'block';
        alert('worked')
    })
}

function submittingform(e){

    e.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;
    saveMessages(fullname,address,city,telephone, email);
}



