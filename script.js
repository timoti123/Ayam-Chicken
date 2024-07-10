document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;

    const resultBox = document.getElementById('result');
    resultBox.innerHTML = `
        <strong>Nama:</strong> ${name} <br>
        <strong>Email:</strong> ${email} <br>
        <strong>Tanggal Lahir:</strong> ${dob} <br>
        <strong>Jenis Kelamin:</strong> ${gender}
    `;
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
