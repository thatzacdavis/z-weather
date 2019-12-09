import Project from './classes/project';
import '../css/index.scss'

const project = new Project("z Weather");
const header = document.getElementById('header');
header.innerText = `What is ${project.name} for Philly?`;
