'use strict'
// const select = document.querySelectorAll("select");

function click  () {
   let text = document.getElementById("pizza");
    let textContent = text.options[text.selectedIndex].text;
    document.getElementById("non").value=textContent;

}

