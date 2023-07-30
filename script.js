const slider = document.querySelector('input[name="theme"]');

slider.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }

});