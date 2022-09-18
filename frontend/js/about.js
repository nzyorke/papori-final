const navBar = document.getElementById("nav-bar");
const navSearch = document.getElementById("nav-search");
const footerTopInfo1 = document.getElementsByClassName(`footer-top-info1`);

// ==============
//     NAV
// ==============

navSearch.onclick = function () {
    navExpand();
};

function navExpand() {
    navBar.classList.toggle("nav-expand");
}


// ==============
//    FOOTER
// ==============

for (let i = 0; i < footerTopInfo1.length; i++) {

    const element = footerTopInfo1[i];

    element.addEventListener("click", function () {

        this.classList.toggle("active");

        console.log("clicked");

    });

}
