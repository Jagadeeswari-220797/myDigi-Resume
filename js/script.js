/**
 * Digital Resume - Main Script
 * Jagadeeswari Karastalam | Creative Developer
 */

$(document).ready(function() {
    'use strict';

    // 1. Initialize Bootstrap Components
    // ----------------------------------------------------
    
    // Initialize Tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize Popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });


    // 2. jQuery Event Handling
    // ----------------------------------------------------

    // Smooth scroll for nav links (using jQuery)
    $('.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Dynamic Modal Trigger
    $('#triggerModalBtn').on('click', function() {
        const quickModal = new bootstrap.Modal(document.getElementById('quickActionModal'));
        quickModal.show();
    });
    
    // Download CV Action
    $('#downloadBtn').on('click', function() {
        const originalText = $(this).html();
        const btn = $(this);
        
        btn.html('<span class="spinner-border spinner-border-sm me-2"></span>Preparing...');
        btn.prop('disabled', true);
        
        setTimeout(() => {
            btn.html('<i class="bi bi-check-lg me-2"></i>Downloaded!');
            btn.removeClass('btn-outline-light').addClass('btn-success');
            
            // Revert after 3 seconds
            setTimeout(() => {
                btn.html(originalText);
                btn.removeClass('btn-success').addClass('btn-outline-light');
                btn.prop('disabled', false);
            }, 3000);
            
            // In a real scenario, we would trigger the download here:
            // window.location.href = 'path/to/resume.pdf';
            alert('Resume download started! (Demo Mode)');
        }, 1500);
    });

    // Hover effect on project cards (jQuery)
    $('.project-card').hover(
        function() {
            $(this).find('.card-title').addClass('text-primary');
        },
        function() {
            $(this).find('.card-title').removeClass('text-primary');
        }
    );


    // 3. Form Validation Logic
    // ----------------------------------------------------

    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                // Mock success for demonstration
                event.preventDefault();
                $('#contactForm').fadeOut(300, function() {
                    $('#formSuccessAlert').removeClass('d-none').hide().fadeIn();
                });
            }

            form.classList.add('was-validated');
        }, false);
    });


    // 4. Navbar Transparency on Scroll
    // ----------------------------------------------------
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('shadow-lg');
        } else {
            $('.navbar').removeClass('shadow-lg');
        }
    });

});
