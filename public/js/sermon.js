
const sermonPost = document.getElementById('sermonPost');

sermonPost.addEventListener('submit',submitSermonPost );

function saveMessage(sermonTitle,sermonTeacher,sermonContent,sermonDate,imagelinksermonimage,audiolink){
   
    db.collection('messages').add({

        sermonTitle:sermonTitle,
        sermonTeacher:sermonTeacher,
        sermonContent:sermonContent,
        sermonDate:sermonDate,
        imagelinksermonimage:imagelinksermonimage,
        audiolink:audiolink

    }).then(function(){
        console.log('the stuff has updated successfully');
    })
  

}



function submitSermonPost(e){
    e.preventDefault();
    const sermonTitle = document.getElementById('sermonTitle').value;
    const sermonTeacher = document.getElementById('sermonTeacher').value;
    const sermonContent = document.getElementById('sermonContent').value;
    const sermonDate = document.getElementById('sermonDate').value;
    const imagelinksermonimage = document.getElementById('imagelinksermonimage').value
    const audiolink = document.getElementById('audiolink').value;

    saveMessage(sermonTitle,sermonTeacher,sermonContent,sermonDate,imagelinksermonimage,audiolink);




}