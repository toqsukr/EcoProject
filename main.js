import { header } from './components/header/header.component';
import './style.css';

header();
document.querySelector('#app').innerHTML = `
<section id='mainSection'>
  <span>
    Hello
  </span>
</section>
`;
