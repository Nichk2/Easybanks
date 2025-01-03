const mobileMenu = document.querySelector('.burger');
const menu = document.querySelector('.mobile-nav');
const close = document.querySelector('.close');

function toggleMenu() {
    if (menu.classList.contains('active')) {
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(-20px)';
        menu.style.top = "75px";

        setTimeout(() => {
            menu.classList.remove('active');
            menu.style.display = 'none';
        }, 300);
    } else {
        menu.style.display = 'block';
        setTimeout(() => {
            menu.classList.add('active');
            menu.style.opacity = '1';
            menu.style.transform = 'translateY(0)';
        }, 10);
    }

   
}


mobileMenu.addEventListener('click', toggleMenu);


// Close menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) { // Adjust the breakpoint as needed
        if (menu.classList.contains('active')) {
            menu.style.opacity = '0';
            menu.style.transform = 'translateY(-20px)';

            setTimeout(() => {
                menu.classList.remove('active');
                menu.style.display = 'none';
            }, 300);
        }
    }
});

