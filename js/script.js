import { projectsData } from "./data/projects.js";

const projects = document.querySelector(".projects")

for (let i = 0; i < projectsData.length; i++) {
    const project = projectsData[i];

    createProjectHtml(project);
}

function createProjectHtml(project) {
    projects
    projects.innerHTML +=
        `<div class="project-card" style="background-color: ${project.backgroundColor}; color: ${project.textColor}">
            <h2>${project.title}</h2>
            <h3>${project.assignment}</h3>
            <img src="${project.img}" alt="${project.imgAlt}">
            <a href="${project.url}" class="netlify">Website</a>
            <a href="${project.githubUrl}" class="git-hub">GitHub</a>
        </div>`;
}