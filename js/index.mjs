var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablinks of tablinks){
        tablinks.classList.remove("active-link");

    }
    for(tabcontents of tabcontents){
        tabcontents.classList.remove("active-tab");

    }
    Event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    
}