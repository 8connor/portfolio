var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    M.AutoInit();
    M.Parallax.init(document.querySelectorAll(".parallax"));
    M.Sidenav.init(document.querySelectorAll('.sidenav'));

});


