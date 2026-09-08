const target = document.querySelector('#target');
const browserInfo = navigator.userAgent;
const osInfo = navigator.platform;
const screenSize = `${screen.width} x ${screen.height}`;
const availableSpace = `${screen.availWidth} x ${screen.availHeight}`;
const now = new Date();
const dateString = now.toLocaleDateString('fi-FI', {dateStyle: 'long'});
const timeString = now.toLocaleTimeString('fi-FI', {timeStyle: 'short'});

target.insertAdjacentHTML(
  'beforeend',
  `
  <p>Browser: ${browserInfo}</p>
  <p>Operating system: ${osInfo}</p>
  <p>Screen size: ${screenSize}</p>
  <p>Available screen space: ${availableSpace}</p>
  <p>Date: ${dateString}</p>
  <p>Time: ${timeString}</p>
`
);
