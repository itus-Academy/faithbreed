// setting up the events collection to accept inputs from the admin

const guidelist = document.querySelector('.guidelist');
//setting up the guides
//Commencement of the function tha handles the outputing of data

const setupGuides = (data)=>{
    let html = '';
    data.forEach(doc=>{
        const guide = doc.data();

        console.log(guide);
        const li = `
            <li>
                this is the title ${guide.title}
                this is the content ${guide.content}
            </li>
        `;
        html += li;
    });
   
    guidelist.innerHTML = html

    

    // for (var i = 0; i < doc.data().length; i++){
    //     console.log(i);
    // }
}






