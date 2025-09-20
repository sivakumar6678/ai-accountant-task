document.addEventListener('DOMContentLoaded', function () {
            const slider = document.getElementById('testimonialSlider');
            if(slider) {
                const prevBtn = document.getElementById('prevBtn');
                const nextBtn = document.getElementById('nextBtn');
                const dotsContainer = document.getElementById('dotsContainer');
                const items = slider.querySelectorAll('.testimonial-item');
                const totalItems = items.length;
                let currentIndex = 0;

                for (let i = 0; i < totalItems; i++) {
                    const dot = document.createElement('button');
                    dot.addEventListener('click', () => goToSlide(i));
                    dotsContainer.appendChild(dot);
                }
                
                const dots = dotsContainer.querySelectorAll('button');

                function updateSlider() {
                    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
                    dots.forEach((dot, index) => {
                        dot.classList.toggle('active', index === currentIndex);
                    });
                }

                function goToSlide(index) {
                    currentIndex = index;
                    updateSlider();
                }

                nextBtn.addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % totalItems;
                    updateSlider();
                });

                prevBtn.addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
                    updateSlider();
                });
                
                // Add star SVGs dynamically
                const starSVG = `<svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`;
                document.querySelectorAll('.stars').forEach(starContainer => {
                    for(let i=0; i<5; i++) {
                        starContainer.innerHTML += starSVG;
                    }
                });

                updateSlider(); // Initial setup
            }
        });

        