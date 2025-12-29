
window.onload = function() {

    const messageBox = document.getElementById("messageContainer");
    if (getCookie("consentGiven") == "true"){
        messageBox.style.display = "none";
    } else {
        messageBox.style.display = "flex";
    }

    displayCookie();
    console.log("Pageload Complete!");
}


function consentButtonClicked(){
    const messageBox = document.getElementById("messageContainer");
    setCookie("consentGiven", true)
    messageBox.style.display = "none";
}

function setCookie(cookieName, cookieValue) {
  const timeNow = new Date();
  timeNow.setTime(timeNow.getTime() + (300000));
  let expires = "expires="+ timeNow.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";";
  displayCookie();
}

function getCookie(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function displayCookie(){
    if (getCookie("consentGiven") == "true"){
        const outputBox = document.getElementById("favOutputBox");
        const cookieValue = getCookie("favCookie");
        if (cookieValue != ""){
            outputBox.innerHTML = cookieValue;
        } else {
            outputBox.innerHTML = "Not selected yet!";
        }
    } else {
        const messageBox = document.getElementById("messageContainer");
        messageBox.style.display = "flex";
    }
}
