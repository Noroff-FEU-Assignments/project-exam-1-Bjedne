const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".controls ul");

var sectionIndex = 0;

function setIndex() {
    document.querySelector(".controls .selected").classList.remove("selected");
    slider.style.transform = "translate(" + (sectionIndex) * -25 + "%)";
}

document.querySelectorAll(".controls li").forEach(function(indicator, ind) { 
    indicator.addEventListener("click", function() {
        sectionIndex = ind;
        setIndex();
        indicator.classList.add("selected");
    });
});

rightArrow.addEventListener("click", function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add("selected");
});

leftArrow.addEventListener("click", function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add("selected");
});

import { url } from "./fetch.js";
const sliderContainer = document.querySelector(".slider");

sliderContainer.innerHTML = `<div class="loading-indicator">`;

async function getSlide() {
    try {
        const response = await fetch(url);
        const results = await response.json();
    
        sliderContainer.innerHTML = "";

        const slides = results;
        slides.slice(0, 4).forEach(function(slide) {
            sliderContainer.innerHTML += `<a href="html/blogpost.html?id=${slide.id}">
                                        <section class="pc-index">
                                            <img src="${slide.jetpack_featured_media_url}" alt="${slide.title.rendered}">
                                            <h2>${slide.title.rendered}</h2>
                                        </section></a>`;
        });
    } catch (error) {
        console.log(error);
    }
}

getSlide();

import {toggleMenu} from "./hamburger.js";

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )
