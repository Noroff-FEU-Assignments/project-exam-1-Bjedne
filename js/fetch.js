const url = "https://www.bjednanigans.no/wp-json/wp/v2/posts";
const postContainer = document.querySelector(".posts");

async function getPosts() {
    try {
        const response = await fetch(url);
        const results = await response.json();
    
        postContainer.innerHTML = "";

        const posts = results;
        posts.forEach(function(post) {
            postContainer.innerHTML += `<a href="blogpost.html?id=${post.id}">
                                        <div class="post-card">
                                        <img src="${post.jetpack_featured_media_url}">
                                        <h2>${post.title.rendered}</h2>
                                        <span class="material-symbols-outlined larger">arrow_forward</span>
                                        </div></a>`;
        });
    } catch (error) {
        console.log(error);
    }
}

export { url };
export {getPosts};
