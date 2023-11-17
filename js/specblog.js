const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


async function getBlog() {
    const urlBlog = "https://www.bjednanigans.no/wp-json/wp/v2/posts/" + id;

    const response = await fetch(urlBlog);
    const results = await response.json();
    return results;
}

const blogpost = document.querySelector(".bloginsert");

blogpost.innerHTML = `<div class="loading-indicator"></div>`;

 async function specBlog() {
    try {
        const blog = await getBlog();
        blogpost.innerHTML = "";
        blogpost.innerHTML += `<div class="blogpost">
                                    <h1>${blog.title.rendered}</h1>
                                    <img src="${blog.jetpack_featured_media_url}">
                                    <div class="blogpost-content">${blog.content.rendered}</div>
                                </div>`;
    } catch (error) {
        console.log(error);
    }
}

specBlog();

