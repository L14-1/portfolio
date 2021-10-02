let right = document.getElementById('arrowRight')
let left = document.getElementById('arrowLeft')
let first = document.getElementById('firstProject')
let second = document.getElementById('secondProject')
let third = document.getElementById('thirdProject')


left.addEventListener("click", function () {
    if (second.getAttribute('class') === "project middle") {
        first.className = 'project middle'
        second.className = 'project right'
        third.className = 'project right'
    }
    else if (third.getAttribute('class') === "project middle") {
        first.className = 'project left'
        second.className = 'project middle'
        third.className = 'project right'
    }
})

right.addEventListener("click", function () {
    if (first.getAttribute('class') === "project middle") {
        first.className = 'project left'
        second.className = 'project middle'
        third.className = 'project right'
        console.log('right');
    }
    else if (second.getAttribute('class') === "project middle") {
        first.className = 'project left'
        second.className = 'project left'
        third.className = 'project middle'
    }
})