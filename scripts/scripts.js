

const a = true;

window.onload = function() {

    const messageBox = document.getElementById("messageContainer");
    if (a === true){
        messageBox.style.display = "none";
    } else {
        messageBox.style.display = "flex";
    }

    console.log("Pageload Complete");
}


