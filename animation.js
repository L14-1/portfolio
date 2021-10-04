// Animation apparition social

let footer = document.getElementById('footer')
let contactText = document.getElementById('contactText')
let social = document.getElementById('social')

footer.addEventListener("mouseover", function () {
    contactText.className = ('topP')
    social.className = ('social socialAppears')
})

footer.addEventListener("mouseout", function () {
    contactText.className = ('')
    social.className = ('social')
})

// Animation apparition des projets


window.addEventListener('scroll', function () {
    let project = document.getElementsByClassName('project');

    project = project[0]

    let projectPosition = project.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2.5;

    if (projectPosition < screenPosition) {
        project.classList.add('active');
    } else {
        project.classList.remove('active');
    }
})

window.addEventListener('scroll', function () {
    let project = document.getElementsByClassName('project');

    project = project[1]

    let projectPosition = project.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2.3;

    if (projectPosition < screenPosition) {
        project.classList.add('active');
    } else {
        project.classList.remove('active');
    }
})

window.addEventListener('scroll', function () {
    let project = document.getElementsByClassName('project');

    project = project[2]

    let projectPosition = project.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2;

    if (projectPosition < screenPosition) {
        project.classList.add('active');
    } else {
        project.classList.remove('active');
    }
})

// Hamburger menu

const menu = document.getElementById('menu')
let menuTop = document.getElementById('menuTop')
let menuMiddle = document.getElementById('menuMiddle')
let menuBottom = document.getElementById('menuBottom')
let header = document.getElementById('header')

menu.addEventListener('click', () => {

    let cName = menuTop.className

    if (cName != 'menuBar topBar') {

        menuTop.classList.add('topBar');
        menuMiddle.classList.add('middleBar');
        menuBottom.classList.add('bottomBar');
        header.classList.add('headerWithMenu');

    } else {

        menuTop.classList.remove('topBar');
        menuMiddle.classList.remove('middleBar');
        menuBottom.classList.remove('bottomBar');
        header.classList.remove('headerWithMenu');

    }

})

const links = document.getElementById('links')

links.addEventListener('click', () => {
    menuTop.classList.remove('topBar');
    menuMiddle.classList.remove('middleBar');
    menuBottom.classList.remove('bottomBar');
    header.classList.remove('headerWithMenu');
})