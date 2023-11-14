const panels = document.querySelectorAll('.pic');

panels.forEach(pic => {
    pic.addEventListener('click', () => {
        removeActiveClasses();
        pic.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(pic => {
        pic.classList.remove('active');
    })
    // pic.classList.remove('active');
}