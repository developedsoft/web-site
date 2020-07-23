const menuBtn = document.querySelector(".menu__btn");
const sideBar = document.querySelector(".sidebar");
const sideBar__ul = document.querySelector(".sidebar__ul");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
        sideBar__ul.classList.add("sidebar-open-ul");
        sideBar.classList.add("sidebar-open");
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
        sideBar__ul.classList.remove("sidebar-open-ul");
        sideBar.classList.remove("sidebar-open");
    }
});


var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function() {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

let miModalweb = document.getElementById('miModalweb');
let flexweb = document.getElementById('flexweb');
let openweb = document.getElementById('openweb');
let closeweb = document.getElementById('closeweb');

openweb.addEventListener('click', function() {
    miModalweb.style.display = 'block';
});

closeweb.addEventListener('click', function() {
    miModalweb.style.display = 'none';
});

window.addEventListener('click', function(e) {
    console.log(e.target);
    if (e.target == flexweb) {
        miModalweb.style.display = 'none';
    }
});
let miModalstore = document.getElementById('miModalstore');
let flexstore = document.getElementById('flexstore');
let openstore = document.getElementById('openstore');
let closestore = document.getElementById('closestore');

openstore.addEventListener('click', function() {
    miModalstore.style.display = 'block';
});

closestore.addEventListener('click', function() {
    miModalstore.style.display = 'none';
});

window.addEventListener('click', function(e) {
    console.log(e.target);
    if (e.target == flexstore) {
        miModalstore.style.display = 'none';
    }
});