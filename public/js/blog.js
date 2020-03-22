
const blogPost = document.getElementById('blogPost');
blogPost.addEventListener('submit', submitFormBlog);

function saveMessage(blogTitle,blogAuthor,blogDate,blogCategory,blogContent,imagelinker ){
    db.collection('events').add({
        blogTitle:blogTitle,
        blogAuthor:blogAuthor,
        blogDate:blogDate,
        blogCategory:blogCategory,
        blogContent:blogContent,
        imagelinker:"gs://pneuma-life.appspot.com/blog" + imagelinker
    }).then(function(){
        console.log('the stuff has updated successfully');
    })
  

}


function submitFormBlog(e){
    e.preventDefault();

        const blogTitle = document.getElementById('blogTitle').value;
        const blogAuthor = document.getElementById('blogAuthor').value;
        const blogDate = document.getElementById('blogDate').value;

        const category = document.getElementById('category')
        var blogCategory = category.options[category.selectedIndex].value;

        const blogContent = document.getElementById('blogContent').value;
        const imagelinker = document.getElementById('imagelinker').value;
        console.log(blogCategory);
        console.log("gs://pneuma-life.appspot.com/blog" + imagelinker);
        saveMessage(blogTitle,blogAuthor,blogDate,blogCategory,blogContent,imagelinker)

}


