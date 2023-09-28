import './header.style.css';

export const header = async () => {
  const moduleUrl = new URL('./header.template.html', import.meta.url);
  const data = await (await fetch(moduleUrl)).text();
  document.querySelector('#header-container').innerHTML = data;
};
