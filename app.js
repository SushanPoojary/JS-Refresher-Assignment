"use strict";

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

animePref('Y', 'Sushan Poojary');