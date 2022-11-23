const navBtn = document.querySelector('.nav-toggle');
const resNav = document.querySelector('.responsive-navbar');
const resNavLists = resNav.querySelectorAll('.responsive-navbar_link');
const nav= document.querySelector('.nav');

navBtn.addEventListener('click', (e) => {
    resNav.classList.toggle('d-none');
    e.target.classList.toggle('active');

    document.body.classList.toggle('overflow-hidden');
    // nav.classList.toggle('position-sticky top-0')
})

resNavLists.forEach(list => {
    list.addEventListener('click', () => {
        resNav.classList.toggle('d-none');
        document.body.classList.toggle('overflow-hidden');
    })
})