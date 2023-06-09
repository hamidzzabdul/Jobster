const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', e => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('slide-in')
    const navBar = document.querySelector('.navigation')
    const mainSection= document.querySelector('main')

    navBar.classList.toggle('sidebar-active')
    mainSection.classList.toggle('side-active')
})

const dropdown = document.querySelector('.drop-down')
let dropdownIsVisible = false
dropdown.addEventListener('click', (e) => {
    document.querySelector('.dropdown-item').style.visibility='visible'
    if(!dropdownIsVisible){
        document.querySelector('.dropdown-item').style.visibility='visible'
        dropdownIsVisible = true
    }else{
        document.querySelector('.dropdown-item').style.visibility='hidden'
        dropdownIsVisible = false
    }
})