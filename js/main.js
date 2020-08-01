let isMenuOpen = false

const updateScreen = () => {
    const initialScreen = document.getElementById('initialScreen')
    const menu = document.getElementById('menu')
    const alert = document.getElementsByClassName('alert')[0]    
    
    alert.classList.toggle('change')

    initialScreen.classList.toggle('index4')
    initialScreen.classList.toggle('index3')

    menu.classList.toggle('index3')
    menu.classList.toggle('index4')

    setTimeout(() => {
        alert.style.display = 'none'
    }, 5000)
}

const onApprove = () => {
    const video = document.getElementById('video1')
    video.classList.toggle('change')
    video.play()

    updateScreen();    
} 

const openMenu = () => {

    document.getElementsByClassName('btnMenu')[0]
        .classList.toggle('change')
    document.getElementsByClassName('menu')[0]
        .classList.toggle('change')
    
    setTimeout(() => {
        isMenuOpen = true
        document.getElementsByClassName('menu')[0]
            .classList.toggle('opacity')
    }, 10)
}

const selectSong = event => {
    
}

const closeMenu = () => {
    if(!isMenuOpen) return
    
    const menu = document.getElementsByClassName('menu')[0]
    const btnMenu = document.getElementsByClassName('btnMenu')[0]

    menu.classList.toggle('opacity')
    btnMenu.classList.toggle('change')
    
    setTimeout(() => {
        menu.classList.toggle('change')
        isMenuOpen = false
    }, 5000)
}

window.onload = () => {
    document.addEventListener('click', closeMenu)
}