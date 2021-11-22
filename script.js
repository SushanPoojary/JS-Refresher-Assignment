"use strict";

let pName = (fullname) => {
    const sName = fullname.split(" ");
    const firstName = sName.slice(0, 1).toString();
    const lastName = sName.slice(1, 2).toString();
    const x = ("Welcome " + firstName + " " + lastName + " to the Gamers Arena!" + "<br />" + "<br />");
    document.getElementById('fullname2').innerHTML = x;
}

let htmlData = () =>{
    let fullname;
    fullname = document.getElementById("fullname").value;
    console.log("Welcome", fullname);
    pName(fullname);
}

let generateNick = () =>{
    let tempAr = ["The Witch", "$kull Bre@ker", "Dragon Slayer", "Shooter", "Ninja"];
    let nickG = Math.floor(Math.random() * tempAr.length);
    document.getElementById("gamename").value = tempAr[nickG];
}

let randomColor = () => {
    let colorArr = ["Red", "Blue", "Green", "Yellow", "Cyan", "White", "Black"];
    let colorDisplay = Math.floor(Math.random() * colorArr.length);
    document.write("Your Lucky Color for today is: ", colorArr[colorDisplay], "<br />", "<br />");
}


let randomNumber = () => {
    const lNo = Math.floor(Math.random()*10);
    document.write("Your Lucky No for the day is: ", lNo , "<br />", "<br />");

}


let showPlayerLocation = (position) => {
    // document.write("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude, "<br />", "<br />");
    var loc = document.getElementById("ploc");
    loc.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude, "<br />";
}

let playerLocation = () => {
    var loc = document.getElementById("ploc");
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPlayerLocation);
    }
    else {
        //document.write("GeoLocation is not supported.");
        loc.innerHTML = "GeoLocation is not supported.";
    }
}

let hitMeSS = () => {
    if (typeof(Storage) !== "undefined") {
      if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
      } else {
        sessionStorage.clickcount = 1;
      }
      document.getElementById("hmuss").innerHTML = sessionStorage.clickcount + " hit(s).";
    } else {
      document.getElementById("hmuss").innerHTML = "Browser does not support web storage.";
    }
}

let hitMeLS = () => {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("hmuls").innerHTML = localStorage.clickcount + " overall hit(s).";
    } else {
      document.getElementById("hmuls").innerHTML = "Browser does not support web storage.";
    }
}

let registerDisplay = () => {
  alert("Successfully Registered!");
}