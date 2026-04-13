/* ================================================
   FARMACIA SANTA CRUZ - PRESENTATION SCRIPT
   Slide Navigation
   ================================================ */

(function() {
    'use strict';

    const state = {
        current: 1,
        total: 0,
        transitioning: false,
        touchStart: 0,
        touchEnd: 0
    };

    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentEl = document.getElementById('current');
    const totalEl = document.getElementById('total');
    const progressFill = document.querySelector('.progress-fill');

    function init() {
        state.total = slides.length;
        totalEl.textContent = state.total;
        updateProgress();
        setupEvents();
        setupKeyboard();
        setupTouch();
        console.log('🎬 Presentación iniciada');
    }

    function showSlide(num) {
        if (state.transitioning || num < 1 || num > state.total) return;
        
        state.transitioning = true;
        
        slides.forEach(s => s.classList.remove('active'));
        document.getElementById(`slide-${num}`).classList.add('active');
        
        state.current = num;
        currentEl.textContent = num;
        updateProgress();
        updateNavButtons();
        
        setTimeout(() => { state.transitioning = false; }, 500);
    }

    function next() {
        if (state.current < state.total) showSlide(state.current + 1);
    }

    function prev() {
        if (state.current > 1) showSlide(state.current - 1);
    }

    function updateProgress() {
        const percent = ((state.current - 1) / (state.total - 1)) * 100;
        progressFill.style.width = `${percent}%`;
    }

    function updateNavButtons() {
        prevBtn.disabled = state.current === 1;
        nextBtn.disabled = state.current === state.total;
    }

    function setupEvents() {
        prevBtn.addEventListener('click', prev);
        nextBtn.addEventListener('click', next);
    }

    function setupKeyboard() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowRight': case 'ArrowDown': case ' ': case 'PageDown':
                    e.preventDefault(); next(); break;
                case 'ArrowLeft': case 'ArrowUp': case 'PageUp':
                    e.preventDefault(); prev(); break;
                case 'Home':
                    e.preventDefault(); showSlide(1); break;
                case 'End':
                    e.preventDefault(); showSlide(state.total); break;
                case '1': case '2': case '3': case '4': case '5':
                case '6': case '7': case '8': case '9':
                    const n = parseInt(e.key);
                    if (n <= state.total) showSlide(n);
                    break;
            }
        });
    }

    function setupTouch() {
        document.addEventListener('touchstart', (e) => {
            state.touchStart = e.changedTouches[0].screenX;
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            state.touchEnd = e.changedTouches[0].screenX;
            const diff = state.touchStart - state.touchEnd;
            if (Math.abs(diff) > 50) {
                diff > 0 ? next() : prev();
            }
        }, { passive: true });
    }

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();