// ==UserScript==
// @name         Bot for Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @match        https://crushdrummers.ru/*
// @grant        none
// ==/UserScript==

let links = document.links;
let site = location.host;
if (location.host == "yandex.ru") {
    let sites = {
        "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":["Гобой", "Как звучит флейта", "Что такое валторна", "Как выглядит тромбон", "Музыкальные диктанты онлайн", "Виолончель"],
        "crushdrummers.ru":["Барабанное шоу","Шоу барабанщиков москва","Заказать барабанное шоу"]
    }
    site = Object.keys(sites)[getRandom(0,Object.keys(sites).length)];
    var btnK = document.getElementsByClassName('button__text')[0];
    let keywords = sites[site];
    let keyword = keywords[getRandom(0,keywords.length)];


    if (btnK!=undefined){
        writeWord(keyword);
    }
    getGooglePage();
}
else {
    if (getRandom(0,100)>20){
        let index = getRandom(0,links.length);
        if (links[index].href.indexOf(site)!=-1 && links[index].href.indexOf('#')==-1 && links[index].href.indexOf('.jpg')==-1)
            setTimeout(()=>{links[index].click();}, 5000);
        else location.href = `https://${site}/`;
    }
    else location.href = "https://yandex.ru/";
}

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

function writeWord(keyword){
  let i = 0;
  let timerId = setInterval(()=>{
    setTimeout(()=>{
        document.getElementsByName('text')[0].value += keyword[i];
        i++;
        if (i==keyword.length) {
            clearInterval(timerId);
            btnK.click();
    }
    },getRandom(0,1000));
  },300);
}

function getGooglePage () {
    let goNextPage = true;
    let pnnext = document.querySelector('[aria-label="Следующая страница"]');
    let logo = document.getElementsByClassName('logo_type_link')[0];
    for(let i=0; i<links.length; i++){
    if(links[i].href.indexOf(site)!=-1){
        let link = links[i];
        setTimeout(()=>{link.scrollIntoView(true);},2000);
        goNextPage = false;
        links[i].removeAttribute('target');
        setTimeout(()=>link.click(), 5000);
        break;
        }
    }

    if (goNextPage) setTimeout(()=>{
        if (document.getElementsByClassName('pager__item_current_yes')[0].innerText == 10) logo.click();
        else pnnext.click();
    }, 5000);
}
