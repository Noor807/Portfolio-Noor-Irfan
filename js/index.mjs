
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event){
    // Remove active class from all tab links
    for (let link of tablinks) {
        link.classList.remove("active-link");
    }
    
    // Remove active class from all tab contents
    for (let content of tabcontents) {
        content.classList.remove("active-tab");
    }
    
    // Add active class to the clicked tab link
    event.currentTarget.classList.add("active-link");
    
    // Show the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}
