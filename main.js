window.onload = function() {
    const div1 = document.getElementById("div1")
    const div2 = document.getElementById("div2")
    const btn = document.getElementById("btn")
    let changed = true;
    btn.onclick = () => {
        changed = !changed
        div1.style.width = changed ? "calc(100% / 3)" : "calc(100% / 5)"
        div2.style.width = changed ? "calc(2 * 100% / 3)" : "calc(4 * 100% / 5)"
    };
}