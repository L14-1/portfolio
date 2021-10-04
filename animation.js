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