var importantIcon = "fa-solid fa-triangle-exclamation important";
var nonImportantIcon = "fa-solid fa-star";

function toggleForm(){
    console.log("Button clicked");

    $(".form-container").toggle();
}

function toggleImportant(){
    console.log("Icon Clicked");

    $("#iImportant").removeClass(nonImportantIcon);
    $("#iImportant").addClass(importantIcon);
}

function init(){
    console.log("Task Manager");
    // loads data 

    // assigns events
    $("#iImportant").click(toggleImportant);
    $("#btnToggleForm").click(toggleForm);

}

window.onload = init;