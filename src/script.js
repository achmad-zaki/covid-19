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
        // dropDown.classList.add('transition', 'duration-300')
    }
}