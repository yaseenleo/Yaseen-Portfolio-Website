AOS.init();

console.log(window.pageYOffset)

var previousScrollPos = window.pageYOffset;
console.log(previousScrollPos)
window.onscroll = function() {
    var currentScroll = window.pageYOffset;
    if(previousScrollPos > currentScroll ) {
        document.getElementById("navbar").style.top = "0"
    }
    else{
        document.getElementById("navbar").style.top = "-56px"
    }
    // console.log(previousScrollPos)
    // console.log(currentScroll)
    // console.log(previousScrollPos = currentScroll)
    previousScrollPos = currentScroll
}

var headerImage = document.getElementsByClassName('header-img');
new simpleParallax(headerImage, {
	scale: 1.4
});