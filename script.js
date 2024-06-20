const getrandcolor = () => {
    let randomidx = Math.floor(Math.random()*16777215);
    // console.log(randomidx);
    let hexcode = "#" + randomidx.toString(16);
    document.querySelector(".main").style.backgroundColor = hexcode;
    document.querySelector("h1").innerText = hexcode;
}
getrandcolor();

document.querySelector("button").addEventListener("click" ,() => {
    getrandcolor();
});

const copied = () => {
    let copybtn = document.querySelector("span");
    copybtn.addEventListener("click" , () => {
        navigator.clipboard.writeText(document.querySelector("h1").innerText);
       copybtn.innerText = "Check";
       copybtn.title = "text copied";
       setTimeout(() =>{
        copybtn.innerHTML = "Copied";
        copybtn.title = "";
       },2000);
    });
}
copied();