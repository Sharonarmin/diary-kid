// Loader will hide after 3 seconds (3000 ms)
setTimeout(function() {
    const loader = document.getElementById("loader");
    const content = document.querySelector(".content");

    loader.style.display = "none";    // Hide the loader
    content.style.display = "block";  // Show the main content
}, 3000);
