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
                                    <img id="imgModal" src="${blog.jetpack_featured_media_url}">
                                    <div class="blogpost-content">${blog.content.rendered}</div>
                                </div>
                                <dialog id="modal" class="modal">
                                <span class="close">&times;</span>
                                <img class="modal-content" id="img01">
                                </dialog>`;
    } catch (error) {
        console.log(error);
    }
}

specBlog();

async function openModal() {
    await specBlog();
    var modal = document.getElementById("modal");

    var img = document.getElementById("imgModal");
    var modalImg = document.getElementById("img01");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }
}

openModal();

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
