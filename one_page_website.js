// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll(".thumbnail"); // Select all thumbnail images

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            const modal = document.createElement("div"); // Create a modal container
            modal.classList.add("modal");

            const modalImg = document.createElement("img"); // Create the modal content (enlarged image)
            modalImg.src = thumbnail.dataset.large; // Use the data-large attribute for the larger image
            modalImg.alt = thumbnail.alt; // Set alt attribute for accessibility
            modalImg.classList.add("modal-content");

            modal.appendChild(modalImg); // Append the enlarged image to the modal container
            document.body.appendChild(modal); // Append the modal container to the body

            modal.addEventListener("click", function() {
                modal.remove(); // Remove the modal when clicked
            });
        });
    });
});
// JavaScript for lightbox (modal image gallery)
const images = document.querySelectorAll('.lightbox-image');
images.forEach(image => {
    image.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.classList.add('lightbox-modal');
        modal.innerHTML = `<span class="close">&times;</span><img class="modal-content" src="${this.src}" alt="${this.alt}">`;
        document.body.appendChild(modal);

        const closeModal = () => {
            modal.remove();
            document.removeEventListener('keydown', handleEscape);
        };

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
    });
});

