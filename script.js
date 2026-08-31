const track = document.getElementById("inspirationTrack");
const nextBtn = document.getElementById("nextBtn");
const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll("#inspirationTrack > div");

let currentSlide = 0;

function updateCarousel() {

    const slideWidth = slides[0].offsetWidth;
    const gap = 24;

    track.style.transform =
        `translateX(-${currentSlide * (slideWidth + gap)}px)`;

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "bg-[#B88E2F]",
            index === currentSlide
        );

        dot.classList.toggle(
            "bg-gray-300",
            index !== currentSlide
        );

    });
}

nextBtn.addEventListener("click", () => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    updateCarousel();
});

dots.forEach((dot) => {

    dot.addEventListener("click", () => {

        currentSlide = Number(dot.dataset.slide);

        updateCarousel();

    });

});

window.addEventListener("resize", updateCarousel);

updateCarousel();