"use strict";

let pName = (playerName) => {
    const sName = playerName.split(" ");
    const firstName = sName.slice(0, 1).toString();
    const lastName = sName.slice(1, 2).toString();
    console.log("Welcome", firstName, lastName, "to the Gamers Arena!");
}

const emailValidation = (playerEmail) => {
    if(playerEmail.includes("@")){
        console.log("Valid Email");
    }
    else{
        console.log("Please Enter a valid email address.");
    }
}




let user_input_name = window.prompt("Enter your full name", "");
let user_input_age = window.prompt("Enter your age", "");
let user_input_email = window.prompt("Enter your email address", "");
let user_input_search = window.prompt("Please Enter the Search Term(Name/Age/Email)", "");
let user_lucky_number = window.prompt("Do you  prefer single or double digits(1/2)?");
let user_input_anime = window.prompt("Do you like anime? (Y/N)");
let user_input_nick = window.prompt("Let's generate a gamers nickname for you. Press Y");

function playerData(user_input_name, user_input_age, user_input_email){
    this.user_input_name = user_input_name;
    this.user_input_age = user_input_age;
    this.user_input_email = user_input_email;
}
let playerDataObj = new playerData(user_input_name, user_input_age, user_input_email);

// Storing in LocalStorage
if(typeof playerDataObj == "object"){
const pdObj = {playerN: playerDataObj.user_input_name, playerA: playerDataObj.user_input_age, playerE: playerDataObj.user_input_email };
const pJSON = JSON.stringify(pdObj);
localStorage.setItem("playerJSON", pJSON);
//console.log(pJSON);
}

//Retrieve 
let playerText = localStorage.getItem("playerJSON");
let pObj = JSON.parse(playerText);
//console.log(pObj);


const pSearch = (search_term) => {
    const pdObj = {playerN: playerDataObj.user_input_name, playerA: playerDataObj.user_input_age, playerE: playerDataObj.user_input_email };
    const{playerN, playerA, playerE} = pdObj;
    if(search_term == "Name"){
        console.log(playerN);
    }
    else if(search_term == "Age"){
        console.log(playerA);
    }
    else if(search_term == "Email"){
        console.log(playerE);
    }
    else{
        console.log("Please search a valid Name/Age/Email");
    }
}


let randomColor = (...color) => {

let colorArr = [...color, "White", "Black"];
let colorDisplay = Math.floor(Math.random() * colorArr.length);
console.log("Your Lucky Color for today is:", colorArr[colorDisplay]);

}

//Closure
const randomNo = (a) => {
    return function multiply(b=1){
        return a*b;
    }
}

if(user_lucky_number == 1){
    const lNo = randomNo(Math.floor(Math.random()*10));
    console.log("Your Lucky No for the day is:", lNo());
}
else if (user_lucky_number == 2){
    const lNo2 = randomNo(Math.random()*10);
    console.log("Your Lucky No for the day is:", Math.round(lNo2(10)));
    
}


const animePref = (pr, n) => {
    if(pr == "Y"){
        var pref = require('./vibe.js');
        var pref1 = new pref(n);
        console.log(pref1.msg());
    }
    else if(pr == "N"){
        console.log("Oh that's cool! You should really check it out someday.");
    }
    else{
        console.log("Please enter Y or N");
    }
}


class GamersNick{
    static nickGenerator(inp){
        if(inp == "Y"){
            let tempAr = ["The Witch", "BigMan", "Dragon Slayer", "Shooter", "Ninja"];
            let nickG = Math.floor(Math.random() * tempAr.length);
            return tempAr[nickG];
        }
        else{
            console.log("Please press Y");
        }
    }
}

const regEx = (regText) => {
    let x = regText.search(/thief/i);
    if(x > 0){
        let y = regText.replace("Thief", "Theft");
        console.log(y);
    }
}


class FavAnimal {
    constructor(anarr){
        Object.assign(this, anarr);
    }
    identity(){
        return `Name is ${this.name}`;
    }
    yum(){
        return `Its fav food is ${this.favFood}`;
    }
    noise(){
        return `It ${this.sound} alot`;
    }
}

class Dog extends FavAnimal{
    constructor(anarr){
        super(anarr);
        Object.assign(this, anarr);
    }
    noise(){
        return `${this.sound} ${this.sound} ${this.sound}`
    }
}

const doggy = new Dog({name:'Kimchi', favFood: 'Pedigree', sound: 'bark'});
doggy.noise();


const spinWheels = {
    game: "Spin The Wheel",
    page: 2,
    attempts: 3,
    getAttempts(){
        return this.attempts;
    },
    gameName(){
        return `${this.game}`;
    }
};

const playGameName = function(user_input_name){
    console.log(user_input_name+ " is playing " + this.gameName() + " and has " + this.getAttempts() + " attempts left ");
};

var bplayGameName = playGameName.bind(spinWheels);


// let vlcDemo = () => {
//     var n1 = 10;
//     console.log(n1);
//     var n1 = 15; //can declare again
//     console.log(n1);
//     n1 = 16; //can be updated
//     console.log(n1);
//     let n2 = 07;
//     console.log(n2);
//     let n2 = 20; //cannot be declared again
//     n2 = 20; //can be updated
//     console.log(n2);
//     const n3 = 25;
//     console.log(n3);
//     const n3 = 30; //cannot be declared again
//     console.log(n3);
//     n3 = 30; //cannot be updated
//     console.log(n3);
// }


function gamersPrintC(str, callback){
    setTimeout(
        () => {
            console.log(str)
            callback()
        }
    )
}

function gamersAllC(user_input_name){
    gamersPrintC("Watch your name below", () =>{
        gamersPrintC(user_input_name, () =>{
            gamersPrintC("Done!", () =>{})
        })
    })
}


function gamersPrintPA(str){
    return  new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(str)
                resolve()
            }
        )
    })
}

function gamersAllP(user_input_name){
    gamersPrintPA("Watch your name below")
    .then(() => gamersPrintPA(user_input_name))
    .then(() => gamersPrintPA("Done!"))
}


async function gamersAllA(user_input_name){
    await gamersPrintPA("Watch your name below")
    await gamersPrintPA(user_input_name)
    await gamersPrintPA("Done!")
}


gamersAllC(user_input_name);
gamersAllP(user_input_name);
gamersAllA(user_input_name);
playGameName.call(spinWheels, user_input_name);
playGameName.apply(spinWheels, [user_input_name]);
bplayGameName(user_input_name);
pName(user_input_name);
emailValidation(user_input_email);
pSearch(user_input_search);
randomColor("Red", "Blue", "Green", "Yellow", "Cyan");
animePref(user_input_anime, user_input_name);
console.log(GamersNick.nickGenerator(user_input_nick));
regEx("Grand Thief Auto V");