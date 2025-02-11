
window.onload = function () {
    var video = document.getElementById("vid-bg");
    if (video.readyState === 4) {
        video.muted = true;
        video.play();
    }
}
