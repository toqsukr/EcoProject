import './side-bar.style.css';

export const sideBar = async () => {
  const moduleUrl = new URL('./side-bar.template.html', import.meta.url);
  const data = await (await fetch(moduleUrl)).text();
  return data;
};
