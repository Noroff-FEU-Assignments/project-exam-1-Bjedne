const url = "https://www.bjednanigans.no/wp-json/wp/v2/posts";
const postContainer = document.querySelector(".posts");

postContainer.innerHTML = `<div class="loading-indicator">`;

async function getPosts() {
    try {
        const response = await fetch(url);
        const results = await response.json();
    
        postContainer.innerHTML = "";

        const posts = results;
        posts.forEach(function(post) {
            postContainer.innerHTML += `<h2>${post.title.rendered}</h2> 
                                        <p>${post.excerpt.rendered}</p> 
                                        <img src = "${post.jetpack_featured_media_url}">`;
        });
    } catch (error) {
        console.log(error);
    }
}

getPosts();