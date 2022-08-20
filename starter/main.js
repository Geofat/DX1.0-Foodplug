// ES5 fuction declaration //
var hamburger = document.querySelector('.hamburger-menu')
var mobilelink = document.querySelector('.mobile_link-holder')
var backdrop = document.querySelector('.backdrop')

function Addclass() {
    hamburger.classList.toggle('show')
    mobilelink.classList.toggle('showlinks')
    backdrop.classList.toggle('showlinks')
    
}
