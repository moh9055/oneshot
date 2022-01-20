function navMenu(){

    let navBar = document.querySelector('.navbar-sticky');

    window.onscroll = function(){
        var scroll = document.documentElement.scrollTop;

        if(scroll >= 120){
            navBar.classList.add("navbar-sticky-moved-up");
        } else {
            navBar.classList.remove("navbar-sticky-moved-up");
        }
       
        if(scroll >= 250){
            navBar.classList.add("navbar-sticky-transitioned");
        } else {
            navBar.classList.remove("navbar-sticky-transitioned");
        }
        
        if(scroll >= 500){
            navBar.classList.add("navbar-sticky-on");
        } else {
            navBar.classList.remove("navbar-sticky-on");
        }
    }
}
navMenu();