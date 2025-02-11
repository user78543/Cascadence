
window.onload = function () {
    var video = document.getElementById("vid-bg");
    video.muted = true;
    video.load();
    video.onloadeddata = function () {
        video.play();
    };
}
