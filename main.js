import { header } from './components/header/header.component';
import { sideBar } from './components/side-bar/side-bar.component';
import './style.css';

const sideTemplate = sideBar();
console.log(sideTemplate);
header();
document.querySelector('#app').innerHTML = `
<section id='main-section'></section>
`;
