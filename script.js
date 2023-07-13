
function initilizeUpArrow() {
    // Scroll to top button Starts here
    const scrbtn = document.querySelector('.scrbtn')
    const showhide = document.getElementById('top')
    const ScrollFunc = () => {
        const scroll = window.scrollY;
        if (scroll > 10) {
            showhide.className = "scrbtn show";
        } else {
            showhide.className = "scrbtn hide";
        }
    };

    window.addEventListener("scroll", ScrollFunc);
    scrbtn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0
    })
    // Scroll to top button Ends here
}

function main() {
    initilizeUpArrow();
}


main();