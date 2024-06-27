/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),

    navToggle = document.getElementById('nav-toggle'),

    navClose = document.getElementById('nav-close')


if(navToggle) {

    navToggle.addEventListener('click', () => {
    
        navMenu.classList.add('show-menu')
    
    })
}

if(navClose) {

    navClose.addEventListener('click', () => {
    
    navMenu.classList.remove('show-menu')
    
    })
}



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link') 

const linkAction = () => {

    const navMenu = document.getElementById('nav-menu')

    // When we click on each nav__link, we remove the show-men

    navMenu.classList.remove('show-menu')

}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    
    this.scrolly >= 50 ? header.classList.add('bg-header') 
                        :header.classList.remove('bg-header')
    
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections= document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrolly = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight)
        {
            sectionsClass.classList .add('active-link')
        }
    else{
        sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollup = document.getElementById('scroll-up')
    
    this.scrolly >= 350? scrollup.classList.add('show-scroll')
                        : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__data, .footer__container, .footer__group')
sr.reveal('.home__img', {delay: 700, origin: 'bottom'})
sr.reveal('.logos__img, .program__card, .pricing__card', {Interval: 100})
sr.reveal('.choose__img, .calculate__content', {origin: 'left'})
sr.reveal('.choose__content, .calculate__img', {origin: 'right'})

/*=============== CALCULATE JS ===============*/
const calculateform = document.getElementById('calculate-form'),
    calculatecm = document.getElementById('calculate-cm'),
    calculatekg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) =>{
        e.preventDefault()

        if(calculatecm.value === '' || calculatekg.value === ''){
            calculateMessage.classList.remove('color-green')
            calculateMessage.classList.add('color-red')

            calculateMessage.textContent = ' Fill in the Height and Weight 🤵‍♂️'

            setTimeout(() =>{
                calculateMessage.textContent = ''
            }, 3000)
        } else{
            const cm = calculatecm.value / 100,
                kg = calculatekg.value,
                bmi = Math.round(kg / (cm * cm))

            if(bmi < 18.5){
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent = 'Your BMI is ${bmi} and you are Skinny 😥'
            }
            else if(bmi < 25){
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent = 'Your BMI is ${bmi} and you are Healthy 😊'
            }
            else{
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent = 'Your BMI is ${bmi} and you are Overweight 😰'
            }

            calculateCm.value = ''
            calculateKg.value = ''

            setTimeout(() =>{
                calculateMessage.textContent = ''
            }, 4000)
        }
    }

calculateform.addEventListener('submit', calculateBmi)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactUser = document.getElementById('contact-user')

const sendEmail = (e) =>{
    e.preventDefault()

    if(contactUser.value === ''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')
        
        contactMessage.textContent = 'You must enter your email 👆'

        setTimeout(() =>{
            contactMessage.textContent = ''

        }, 3000)
    }
    else{
        emailjs.sendForm('service_8ii265v','template_guf0dsp','#contact-form','VQaq6RG_bXgUd7BNm')
            .then(() =>{
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'You registered successfully 💪'

                setTimeout(() => {
                   contactMessage.textContent = '' 
                }, 3000 );
            }, (error) =>{
                alert('OOPS! SOMETHING HAS FAILED...', error)
            })

            contactUser.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)