function generalOutput(collectionName, limit) {
    db.collection(collectionName).limit(limit).get().then((snapshot) => {
        let html = '';
        const partner = document.getElementById("partner");
        snapshot.docs.forEach(doc => {
            const guide = doc.data();
            console.log(guide);

            const content = `
                                        
                                <tr>
                                    <th scope="row">${guide.fullname}</th>
                                    <td>${guide.email}</td>
                                    <td>${guide.telephone}</td>
                                    <td>${guide.address}</td>
                                    <td>${guide.city}</td>
                                    
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
    generalOutput('partnership', 10);
    // console.log('great')
    
    // dashboardevent('blog',10);
    // getSingleBlogPage();

    // this.alert('na we dey here');
}


