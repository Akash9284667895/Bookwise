// script.js

  const navbarToggle = document.getElementById('navbar-toggle');
  const navList = document.querySelector('.nav-list');

  navbarToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });

  // testing code
  document.addEventListener("DOMContentLoaded", function() {
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbarMenu = document.getElementById("navbarMenu");
  const navbarItems = navbarMenu.getElementsByClassName("navbar-item");

  navbarToggle.addEventListener("click", function() {
    navbarMenu.classList.toggle("active");
  });

  for (let i = 0; i < navbarItems.length; i++) {
    const item = navbarItems[i];
    const dropdown = item.querySelector(".navbar-dropdown");

    if (dropdown) {
      item.addEventListener("click", function(e) {
        dropdown.classList.toggle("active");

        // Close other dropdowns
        const activeDropdowns = navbarMenu.getElementsByClassName("navbar-dropdown active");
        for (let j = 0; j < activeDropdowns.length; j++) {
          if (activeDropdowns[j] !== dropdown) {
            activeDropdowns[j].classList.remove("active");
          }
        }

        e.stopPropagation();
      });
    }
  }

  document.addEventListener("click", function() {
    const activeDropdowns = navbarMenu.getElementsByClassName("navbar-dropdown active");
    for (let i = 0; i < activeDropdowns.length; i++) {
      activeDropdowns[i].classList.remove("active");
    }
  });
});
function openModal(title, description, imageUrl, linkUrl) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const modalLink = document.getElementById("modal-link");

  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalImage.src = imageUrl;
  modalLink.href = linkUrl;

  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}