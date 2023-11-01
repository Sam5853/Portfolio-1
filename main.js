// Header Toggle

let Menubtn=document.getElementById('Menubtn')

Menubtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle('mobile-nav');
    this.classList.toggle('fa-xmark')  // Here in this case the menubtn will be replaced by cancel btn.
})

// Typing Effect

let typed = new Typed('.auto-input',{
    strings: ['Full-Stack Developer!','Front-End Developer!','Freelancer!','UI/UX Designer!','Back-End Developer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

// Active Link State On Scroll

// Get All Links
let navLinks = document.querySelectorAll('nav ul li a')
// Get All Selectors
let sections = document.querySelectorAll('section')
console.log(sections)

window.addEventListener('scroll',function (){
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});

AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });