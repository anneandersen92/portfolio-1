import { projectsData } from "./data/projects.js";

// const projectsSlider = document.querySelector("#projects-slider")
const sliderBtn = document.querySelector(".slider-btn")
const projects = document.querySelector(".projects")

for (let i = 0; i < projectsData.length; i++) {
    const project = projectsData[i];

    createProjectCardHtml(project);
    createSlideBtnHtml(project);
};

function createProjectCardHtml(project) {
    projects.innerHTML +=
        `<div id="${project.id}" class="project-card" style="background-color: ${project.backgroundColor}; color: ${project.textColor}">
            <h2>${project.title}</h2>
            <h3>${project.assignment}</h3>
            <div class="links">
                <a href="${project.url}" class="netlify"><img src="../resources/icons/website_icon.png"></a>
                <a href="${project.githubUrl}" class="git-hub"><img src="../resources/icons/github_icon.png"></a>
            </div>
            <img class="project-img" src="${project.img}" alt="${project.imgAlt}">
        </div>`;
};

function createSlideBtnHtml(project) {
    sliderBtn.innerHTML += `<a href="#${project.id}">${project.id}</a>`
};