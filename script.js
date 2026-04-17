document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS Animation
    AOS.init({
        once: true,
        duration: 800,
        easing: 'ease-out-cubic',
        offset: 50,
    });

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Toggle icon between bars and times (close)
            const icon = hamburger.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Mobile Dropdown Accordion
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                dropdownToggle.parentElement.classList.toggle('active');
            }
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            
            if (hamburger) {
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // Smooth Scroll Offset for sticky header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Scroll Active Link Indicator
    const sections = document.querySelectorAll('.section, .hero');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const navHeight = navbar.offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - navHeight - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        // Mobile bottom nav links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-item');
        mobileNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }); // End of window scroll event listener
    
    // Gallery Modal with Navigation
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close-modal");
    const prevBtn = document.querySelector(".prev-modal");
    const nextBtn = document.querySelector(".next-modal");
    const galleryItems = document.querySelectorAll(".gallery-item img");
    
    let currentIndex = 0;

    if (modal && modalImg && closeBtn) {
        galleryItems.forEach((img, index) => {
            img.addEventListener("click", function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                currentIndex = index;
            });
        });

        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });

        // Close modal when clicking outside the image
        modal.addEventListener("click", function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
        
        // Navigation Logic
        const showImage = (index) => {
            if (index < 0) index = galleryItems.length - 1;
            if (index >= galleryItems.length) index = 0;
            currentIndex = index;
            modalImg.src = galleryItems[currentIndex].src;
        };

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                showImage(currentIndex - 1);
            });
            nextBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                showImage(currentIndex + 1);
            });
        }
        
        // Keyboard navigation
        document.addEventListener("keydown", (e) => {
            if (modal.style.display === "block") {
                if (e.key === "ArrowLeft") showImage(currentIndex - 1);
                if (e.key === "ArrowRight") showImage(currentIndex + 1);
                if (e.key === "Escape") modal.style.display = "none";
            }
        });
    }

    // More Menu (Mobile Practice Selection) Logic
    const moreMenuOverlay = document.getElementById('more-menu-overlay');
    const practiceTrigger = document.getElementById('mobile-practice-trigger');
    const closeMoreMenuBtn = document.getElementById('close-more-menu');
    const body = document.body;

    if (moreMenuOverlay && practiceTrigger) {
        const toggleMoreMenu = (show) => {
            if (show) {
                moreMenuOverlay.style.display = 'flex';
                setTimeout(() => {
                    moreMenuOverlay.classList.add('active');
                    body.classList.add('menu-open');
                }, 10);
            } else {
                moreMenuOverlay.classList.remove('active');
                body.classList.remove('menu-open');
                setTimeout(() => {
                    moreMenuOverlay.style.display = 'none';
                }, 400); // Wait for transition
            }
        };

        practiceTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMoreMenu(true);
        });

        if (closeMoreMenuBtn) {
            closeMoreMenuBtn.addEventListener('click', () => toggleMoreMenu(false));
        }

        // Close when clicking outside content
        moreMenuOverlay.addEventListener('click', (e) => {
            if (e.target === moreMenuOverlay) {
                toggleMoreMenu(false);
            }
        });

        // Close when clicking any link inside the menu
        const menuLinks = moreMenuOverlay.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggleMoreMenu(false);
            });
        });
    }
}); // End of DOMContentLoaded event listener
