module.exports=function(e){void 0===e&&(e={});var o=e.offset;void 0===o&&(o=100);var t=e.threshold;void 0===t&&(t=.01);var a=e.area,r=e.onLoad,i=e.useLoader;void 0===i&&(i=!1);var n=e.dataSelector;void 0===n&&(n="koalazily");var s=Array.from(document.querySelectorAll("[data-"+n+"]"));if(!("IntersectionObserver"in window))return s.forEach(l),s;function l(e){e.src=e.dataset[n],e.onload=function(){r&&r(e),delete e.dataset[n]}}s.forEach(function(e){var o=e.clientWidth||e.offsetWidth,t=e.clientHeight||e.offsetHeight;o&&t&&(e.src=Boolean(i)?"data:image/svg+xml,%3Csvg id='koalazily-loader' width='"+o+"px' height='"+t+"px' viewBox='0 0 "+o+" "+t+"' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cstyle type='text/css'%3E @keyframes koalazily-pulse %7B 0%25 %7Bbackground-position: 0%25 0%25; %7D 100%25 %7Bbackground-position: -135%25 0%25; %7D%0A%7D%0Asvg%23koalazily-loader %7B background: linear-gradient(-90deg, %23e0e0e0 0%25, %23f0f0f0 50%25, %23e0e0e0 100%25); background-size: 400%25 400%25; animation: koalazily-pulse 1.2s ease-in-out infinite;%0A%7D %3C/style%3E%3C/svg%3E":'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+o+" "+t+'"%3E%3C/svg%3E')});var d=new IntersectionObserver(function(e){e.forEach(function(e){e.intersectionRatio>0&&(d.unobserve(e.target),l(e.target))})},{root:a,rootMargin:o+"px 0px",threshold:t});return s.forEach(function(e){return d.observe(e)}),s};
//# sourceMappingURL=koalazily.js.map
