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
    let screenPosition = window.innerHeight / 2.5;

    if (projectPosition < screenPosition) {
        project.classList.add('active');
    } else {
        project.classList.remove('active');
    }
})

