window.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    logo.classList.add('animated'); // Добавляем класс с анимацией при загрузке страницы
});

const menuElementLinks = document.querySelectorAll(".menu-element__link");
const menuHeight = document.querySelector(".header-top").clientHeight;


menuElementLinks.forEach( element =>{
    element.addEventListener("click", function (e) {
        e.preventDefault();

        if (this.classList.contains('active')) {
            return;
        }
        const linkHref = this.getAttribute("href");
        const hrefElement = document.getElementById(linkHref.replace("#", ""));

        const paddingTop = parseInt(getComputedStyle(document.querySelector('#achievements')).paddingTop);

        window.scroll({
            behavior: 'smooth',
            left: 0,
            // top: hrefElement.offsetTop - paddingTop - menuHeight
            top: hrefElement.offsetTop - paddingTop*3
        });

        document.querySelector(".menu-element__link.active").classList.remove('active');
        this.classList.add('active');

    })
    // console.log(element);
})
