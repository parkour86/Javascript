// ==UserScript==
// @name         SteamGifts
// @namespace    http://www.steamgifts.com/
// @version      0.3
// @description  enter something useful
// @author       parkour86
// @match        http://www.steamgifts.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @grant        GM_getValue
// @grant        GM_log
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @description  Hide all giveaways that you have already entered into
// ==/UserScript==

// Grab all faded links
var allFaded = document.getElementsByClassName("giveaway__row-inner-wrap is-faded");
var total = allFaded.length;

// Loop through the faded links and remove them from the page
for (var k=0;k<allFaded.length;k++){
    // Remove all the faded rows
    var row = allFaded[k].parentNode;
    row.parentNode.removeChild(row);
    
    // As one element is removed the next element will decrease because it's dynamic
    // Subtract from k to compensate
    k--;
}        

// Display the number of giveaways removed from the page
var header = document.getElementsByClassName("page__heading")[0];

var b = document.createElement("div");
b.style = "color: black ! important;";
var divContent = document.createTextNode("Removed: " + total);
b.appendChild(divContent);

// Add the div to the page header
header.appendChild(b);
