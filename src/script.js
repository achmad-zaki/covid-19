let navItem = document.getElementsByClassName('nav-item')
for(let i = 0; i < navItem.length; i++) {
        navItem[i].addEventListener('click', function() {
            let current = document.getElementsByClassName('active')
            current[0].className = current[0].className.replace(" active", "")
            this.className += " active"
        })
    }

function myFunction() {
    let dropDown = document.getElementById('dropdown-navbar')
    if(dropDown) {
        dropDown.classList.toggle('hidden')
    }
}

const navbar = document.querySelector('.navbar')
window.onscroll = () => {
    if(window.scrollY > 10) {
        navbar.classList.add('shadow-md')
    } else {
        navbar.classList.remove('shadow-md')
    }
}