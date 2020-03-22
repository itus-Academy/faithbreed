
function generalOutput(collectionName, limit){
    db.collection(collectionName).limit(limit).get().then((snapshot)=>{
        let html = '';
        const myContent =  document.getElementById("out");
        snapshot.docs.forEach(doc=>{
        const guide = doc.data();
        console.log(guide);
       
       
        const content = `
        
        <div class="col-12 col-md-6">
            <div class="single-blog-post mb-50">
                <div class="post-thumbnail">
                    <a href="single-post.html"><img src="${guide.imagelink}" alt=""></a>
                </div>
                <div class="post-content">
                    <a href="single-post.html" class="post-title">
                        <h4>${guide.blogTitle}</h4>
                    </a>
                    <div class="post-meta d-flex">
                        <a href="#"><i class="fa fa-user" aria-hidden="true"></i> Luke Coppen</a>
                        <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i> ${guide.blogDate}</a>
                    </div>
                    <p class="post-excerpt">${guide.blogContent}</p>
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


window.onload = function () {
    generalOutput('blog', 10);
    // console.log('great')
    
    // dashboardevent('blog',10);
    // getSingleBlogPage();

    // this.alert('na we dey here');
}




