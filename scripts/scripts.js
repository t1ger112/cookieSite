
window.onload = function() {

    const messageBox = document.getElementById("messageContainer");
    if (getCookie("consentGiven") == "true"){
        messageBox.style.display = "none";
    } else {
        messageBox.style.display = "flex";
    }

    console.log("Pageload Complete");
}


function consentButtonClicked(){
    const messageBox = document.getElementById("messageContainer");
    setCookie("consentGiven", true)
    messageBox.style.display = "none";
}

function setCookie(cookieName, cookieValue) {
  const timeNow = new Date();
  timeNow.setTime(timeNow.getTime() + (1*24*60*60*1000));
  let expires = "expires="+ timeNow.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";";
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

console.log(getCookie("consentGiven")); 

