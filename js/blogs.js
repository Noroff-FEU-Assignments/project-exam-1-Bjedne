import { getPosts } from "./fetch.js";


const postsLoading = document.querySelector(".posts")

postsLoading.innerHTML = `<div class="loading-indicator"></div>`;


getPosts();


const loadmore = document.querySelector("#load-btn");
    let currentItems = 10;
    loadmore.addEventListener("click", (e) => {
        const elementBlog = [...document.querySelectorAll(".posts a")];
        for (let i = currentItems; i < currentItems + 10; i++) {
            if (elementBlog[i]) {
                elementBlog[i].style.display = "block";
            }
        }
        currentItems += 10;
        if (currentItems >= elementBlog.length) {
            e.target.style.display = "none";
        }
    });

import {toggleMenu} from "./hamburger.js";

hamburger.addEventListener("click", toggleMenu);
    
menuItems.forEach( 
    function(menuItem) { 
        menuItem.addEventListener("click", toggleMenu);
    }
)