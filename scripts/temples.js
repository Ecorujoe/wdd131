// Toggle the navigation menu when the hamburger is clicked
document.getElementById('hamburger').addEventListener('click', function () {
    const menu = document.getElementById('nav-menu');
     menu.classList.toggle('active');

    // Optional: Change icon from ☰ to ✖
    this.textContent = this.textContent === '✖' ? '☰' : '✖';
});

 // Update the footer with the current year and last modified date
   document.getElementById('current-year').textContent = new Date().getFullYear();
   document.getElementById('last-modified').textContent = document.lastModified;