function triggerExternalError() {
    return 4 + b;
}

function injectScript() {
    const script = document.createElement('script');
    script.src = "http://localhost:3002/script2.js";
    script.setAttribute("crossorigin", "anonymous");
    document.body.appendChild(script);
}

setTimeout(() => {
    injectScript();
    triggerExternalError();
}, 5000);


