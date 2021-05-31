let width = window.innerWidth;

function respnosive(nav, parElement) {
    const mainSection = document.querySelector('.main-section');
    const miniNav = document.querySelector('.mini-nav');
    const bodySect = document.querySelector('.body-section');
    const reposSect = document.querySelector('.repos-sect');
    const bodySectChildren = bodySect.children
    if (window.matchMedia("(max-width: 692px)").matches) {
        console.log("responsive")
        bodySect.prepend(miniNav);
    } else {

    }
}



export default respnosive;