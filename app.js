// dark - light mode 

let darModeEnabled = localStorage.getItem('darkModeEnabled')==='true'

const enableDarkMode = () => {
    darModeEnabled=true;
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkModeEnabled', 'true');
}
const disableDarkMode = () => {
    darModeEnabled=false;
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkModeEnabled', 'false');
}

document.addEventListener('DOMContentLoaded', ()=> {
    darkModeButton.checked =darModeEnabled;
    document.body.classList.toggle('dark-mode',darModeEnabled);
});

const darkModeButton = document.getElementById('darkModeButton');

darkModeButton.addEventListener('change', () => {
    if(darkModeButton.checked) {
        enableDarkMode();
    }else {
        disableDarkMode();
    }
})

// hamburger 

const hamburger =document.querySelector('.hamburger');
const navList= document.querySelector('nav ul') ;

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

// multiple typed 

const typed = new Typed ('.multiple', {
    strings:['Front-End Developer','Back-End Developer','Web Designer'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// header shadow 

const header =document.querySelector('header');

window.addEventListener('scroll' , () => {
    if(window.scrollY >0) {
        header.style.boxShadow='0 2px 9px rgba(0, 0, 0.50)'
    }else {
        header.style.boxShadow='none'
    }
})

// nav links section

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav ul a');

window.addEventListener('scroll', ()=> {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav ul li a[href="#' + id + '"]').classList.add('active');
        }

    });
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active')
    })
})

// message 

const form= document.querySelector('form');
const fullName =document.getElementById('name');
const email =document.getElementById('email');
const phone =document.getElementById('phone');
const subject =document.getElementById('subject');
const message =document.getElementById('message');

function sendEmail() {

    const bodyMessage =`Full Name: ${fullName.value} <br> Email: ${email.value}<br>
    Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        SecureToken :'498ea9d6-a905-4e9a-8316-325aedd297ca',
        Host : "smtp.elasticemail.com",
        Username : "sidydenon6@gmail.com",
        Password : "C6C7453D4543CE29A9956C20B523C65A6976",
        To : 'sidydenon6@gmail.com',
        From : "sidydenon6@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message =='OK') {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    sendEmail();
})