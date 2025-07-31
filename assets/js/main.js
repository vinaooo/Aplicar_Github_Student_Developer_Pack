// Google Analytics (gtag.js)
if (location.protocol === 'http:' || location.protocol === 'https:') {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-5HCPYL7L3V';
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.addEventListener('DOMContentLoaded', function () {
        gtag('js', new Date());
        gtag('config', 'G-5HCPYL7L3V');
    });
}
