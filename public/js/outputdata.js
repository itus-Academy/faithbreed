// db.collection('blog').limit(3).get().then((snapshot)=>{
//     // setupGuides(snapshot.docs);
//     snapshot.docs.forEach(doc=>{
//         const guide = doc.data();

//         console.log(guide);
//         // const li = `
//         //     <li>
//         //         this is the title ${guide.title}
//         //         this is the content ${guide.content}
//         //     </li>
//         // `;
//         // html += li;
//     });
// });


function generalOutput(collectionName, limit){
    db.collection(collectionName).limit(limit).get().then((snapshot)=>{
        let html = '';
        const myContent =  document.getElementById("myContent");
        snapshot.docs.forEach(doc=>{
        const guide = doc.data();
        console.log(guide);
       
       
        const content = `
        
    
        <div class="single-upcoming-events-area d-flex flex-wrap align-items-center">
         
            <div class="upcoming-events-thumbnail">
                <img src="${guide.blogImage}" alt="">
            </div>
            <!-- Content -->
            <div class="upcoming-events-content d-flex flex-wrap align-items-center">
                <div class="events-text">
                    <h4>${guide.blogTitle}</h4>
                    <div class="events-meta">
                        <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i> March 01, 2018</a>
                        <a href="#"><i class="fa fa-clock-o" aria-hidden="true"></i> 09:00 - 11:00</a>
                        <a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> 11 Rose St, Brooklyn, NY</a>
                    </div>
                    <p>Join us for an informational webinar about the U.S.-Japan COIL Initiative. Learn about the initiative and receive general guidance.</p>
                   
                </div>
             
            </div>
        </div>
    
        `;
        html += content
        console.log(doc.id);
       
        // console.log(li)
    });
  
   myContent.innerHTML = html;

});
}

// function getSingleBlogPage(){
//     const myContent = document.getElementById('myContent');
//     myContent.addEventListener('click', ()=>{
//         db.collection(collectionName).limit(limit).get().then((snapshot)=>{
//             snapshot.docs.forEach(doc=>{
//         alert("you are not serdoc.ous" + doc.id);
//         })
        
//     })
// }

function dashboardevent(collectionName, limit){
    
        db.collection(collectionName).limit(limit).get().then((snapshot)=>{
            let html = '';
            snapshot.docs.forEach(doc=>{
                const guide = doc.data();
                console.log(guide);
                const content = `
                    <div class="col-sm-3">
                    <img class="img-responsive" src="${guide.blogImage}" width= "100%">
                    </div>
                    <div class="col-sm-9">
                        ${guide.blogTitle}
                        
                    </div>
                `;
                console.log(doc.id)
                html += content;
            });
            document.getElementById("eventdashboard").innerHTML = html;
        })
    }
    const but = document.getElementById('but');
    but.addEventlistener('click', ()=>{
        alert('good')
})

window.onload = function(){
    generalOutput('blog', 5);
    dashboardevent('blog',10);
    // getSingleBlogPage();
    // this.alert('na we dey here');
}

//keep track of the ID of the user and ensure the post id. THen use where keyword, the it displays the data
