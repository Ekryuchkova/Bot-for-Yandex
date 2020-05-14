// ==UserScript==
// @name         Bot for Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

let btnK = document.getElementsByClassName('button__text')[0];
let keywords = ["Гобой", "Как звучит флейта", "Что такое валторна", "Как выглядит тромбон", "Музыкальные диктанты онлайн", "Виолончель"];
let keyword = keywords[getRandom(0,keywords.length)];
let goNextPage = true;
//let pnnext = ; не получилось прицепиться к кнопке "дальше"

if (btnK!=undefined){
    writeWord(keyword);
}
let links = document.links;
for(let i=0; i<links.length; i++){
    if(links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
        let link = links[i];
        goNextPage = false;
        links[i].removeAttribute('target');
        setTimeout(()=>link.click(), 5000);
        break;
    }
}

//if (goNextPage) pnnext.click;

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

function writeWord(keyword){
  let i = 0;
  let timerId = setInterval(()=>{
    document.getElementsByName('text')[0].value += keyword[i];
    i++;
    if (i==keyword.length) {
        clearInterval(timerId);
        btnK.click();
    }
  },300);
}
