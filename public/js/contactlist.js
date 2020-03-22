function generalOutput(collectionName, limit) {
    db.collection(collectionName).limit(limit).get().then((snapshot) => {
        let html = '';
        const partner = document.getElementById("partner");
        snapshot.docs.forEach(doc => {
            const guide = doc.data();
            console.log(guide);

            const content = `
                                        
                                <tr>
                                    <td>${guide.contactName}</td>
                                    <th scope="row">${guide.contactEmail}</th>
                                    <td>${guide.contactNumber}</td>
                                    <td>${guide.contactMessage}</td>
                                   
                                </tr>
                
                    `;

            html += content
            console.log(doc.id);

            // console.log(li)
        });

        partner.innerHTML = html;

    });
}


window.onload = function () {
    generalOutput('contactUs', 10);
    // console.log('great')
    
    // dashboardevent('blog',10);
    // getSingleBlogPage();

    // this.alert('na we dey here');
}


