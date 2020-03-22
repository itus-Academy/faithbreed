function generalOutput(collectionName, limit) {
    db.collection(collectionName).limit(limit).get().then((snapshot) => {
        let html = '';
        const myContent = document.getElementById("myContenter");
        snapshot.docs.forEach(doc => {
            const guide = doc.data();
            console.log(guide);


            const content = `
                    
                
                    <div class="single-upcoming-events-area d-flex flex-wrap align-items-center">
                    
                        <div class="upcoming-events-thumbnail">
                            <img src="${guide.imageprogrammelink}" alt="">
                        </div>
                        <!-- Content -->
                        <div class="upcoming-events-content d-flex flex-wrap align-items-center">
                            <div class="events-text">
                                <h4>${guide.programmeName}</h4>
                                <div class="events-meta">
                                    <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i>${guide.programmeDate}</a>
                                   
                                    <a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> Faithbreed Auditiorium, Adjacent Anchorite School, FUTA Junction </a>
                                </div>
                                <p>${guide.programmeContent}</p>
                            
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
    generalOutput('event', 3);
    // console.log('great')
    
    // dashboardevent('blog',10);
    // getSingleBlogPage();

    // this.alert('na we dey here');
}