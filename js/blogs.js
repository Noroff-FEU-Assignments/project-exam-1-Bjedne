import { getPosts } from "./fetch.js";

const postsLoading = document.querySelector("main")

postsLoading.innerHTML = `<div class="loading-indicator"></div>`;

getPosts();

const loadmore = document.querySelector("#load-btn");
    let currentItems = 10;
    loadmore.addEventListener("click", (e) => {
        const elementBlog = [...document.querySelectorAll(".posts .post-card")];
        for (let i = currentItems; i < currentItems + 10; i++) {
            if (elementBlog[i]) {
                elementBlog[i].style.display = "flex";
            }
        }
        currentItems += 20;
        if (currentItems >= elementBlog.length) {
            event.target.style.display = "none";
        }
    });