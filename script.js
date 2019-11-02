let close_button = document.getElementById('close-button');
close_button.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("window-notice").style.display = "none";
});