// const eventAndProgrammes = document.getElementById('eventAndProgrammes');
// eventAndProgrammes.addEventListener('submit', submitFormBlog);
// function saveMessage(imageUrl,programmeName,programmeDate,programmeContent ){
//     db.collection('programmess').add({
//         imageUrl:imageUrl,
//         programmeName:programmeName,
//         programmeDate:programmeDate,
//         programmeContent:programmeContent
//     }).then(function(){
//         console.log('the stuff has updated successfully');
//     })
  

// }

// function submitFormBlog(e){
//     e.preventDefault();
    
//     // uploader('programmeImage', 'event');
//     // console.log('this is the download url' + downloadURL );


// // function uploader(file, folder){
//     var image = document.getElementById('programmeImage').files[0];
    
//     var imageName = image.name;
//     var storageRef = firebase.storage().ref('event'+'/'+ imageName);
    
//     //upload image to the selected storage reference
//     var uploadTask = storageRef.put(image);
// //    var pro = uploadTask.snapshot.ref.getDownloadURL
//     var pro = uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
//         //get the upload URL image here
//         console.log(downloadURL);
//         // var adex = downloadURL;

//         // return adex;
//         // return adex;e
//         const programmeName = document.getElementById('programmeName').value;
//         const programmeDate = document.getElementById('programmeDate').value;
//         const programmeContent = document.getElementById('programmeContent').value;
//         imageUrl = downloadURL;
//         //this is the time to save the message inside the f
//         saveMessage(imageUrl,programmeName,programmeDate,programmeContent);

//     });
   
    
//     uploadTask.on('state_changed', (snapshot)=>{
//         var progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
//         console.log( "upload is " + progress +  " done"  );


//     }       )




// }