var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    M.Parallax.init(document.querySelectorAll(".parallax"));
});


