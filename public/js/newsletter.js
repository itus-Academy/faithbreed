const defaultText = document.getElementById('default');
const success = document.getElementById('success');


const subscription = document.getElementById('subscription')
subscription.addEventListener('submit', submitSubscription);



function submitSubscription(e){
    e.preventDefault();

    const subscribeInput = document.getElementById('subscribeInput').value;
    console.log("This is the email of the user that wants sub" + subscribeInput);
    db.collection('subscribe').add({
        emailAddress : subscribeInput
    }).then(()=>{
        
       defaultText.style.display = 'none';
       success.style.display = 'block'
    })
}