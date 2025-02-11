const scriptURL= 'https://script.google.com/macros/s/AKfycby5Flt-A59uZI-iW6GrqTBh3vwXPLHM04EZ5lxOYxa7z3-X954m4nQsucx0puNzrxoI/exec'

const form = document.forms['contact-form']

form.addEventListener('submit',e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank You! Your form is submitted successfully.Check Your Mail,if not found refresh/check spam folder after 10mins"))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error!',error.message))
})


const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');

// navbar actions and all section actions along with cube rotation when navbar is clicked
navs.forEach((nav,idx)=> {
    nav.addEventListener('click',()=> {
        document.querySelector('.nav-list li.active').classList.remove('active')
        nav.classList.add('active');

        cube.style.transform = `rotateY(${idx * -90}deg)`;

        document.querySelector('.section.active').classList.remove('active')
        sections[idx].classList.add('active');

        const array = Array.from(sections);
        const arrSecs = array.slice(1, - 1);
        arrSecs.forEach(arrSec => { 
            if (arrSec.classList.contains('active')) {
                sections[4].classList.add('action-contact')
            }
        });
        if (sections[0].classList.contains('active')) {
            sections[4].classList.remove('action-contact')
        }
    });
});


// resume section when clicking tab-list
resumeLists.forEach((list,idx)=> {
    list.addEventListener('click',()=> {
        document.querySelector('.resume-list.active').classList.remove('active')
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active')
        resumeBoxs[idx].classList.add('active');
    })
})


// portfolio section when clicking tab-list
portfolioLists.forEach((list,idx)=> {
    list.addEventListener('click',()=> {
        document.querySelector('.portfolio-list.active').classList.remove('active')
        list.classList.add('active');

        document.querySelector('.portfolio-box.active').classList.remove('active')
        portfolioBoxs[idx].classList.add('active');
    })
})


// visibility for contact section when reloading (cube reloading animation)
setTimeout(() => {
    sections[4].classList.remove('active');
}, 1500);

// Hide code
document.addEventListener("keydown", function (event){
    if (event.ctrlKey){
       event.preventDefault();
    }
    if(event.keyCode == 123){
       event.preventDefault();
    }
});

document.addEventListener('contextmenu', 
    event => event.preventDefault()
);

