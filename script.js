let para = document.getElementById("status");
let btn = document.getElementById("enterBtn");

btn.addEventListener("click", () => {
    para.outerHTML = '<h1 id="status">Entered Metaverse</h1>';
});