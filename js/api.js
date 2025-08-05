const baseFactURL = "s";
const baseImgURL = "https://http.cat/";

const code = document.querySelector("#code");
const statusimg = document.querySelector("#statusimg");
const output = document.querySelector("#output");
const overridebtn = document.querySelector("#overridebtn");
const overtxt = document.querySelector("#overtxt")

overridebtn.addEventListener("click", overrideStatusImage)

var statusCode = 404;
//Fact API
function getCatFact(){ //Credit for documentation: https://alexwohlbruck.github.io/cat-facts/
    fetch(baseFactURL, {
    }).then(res => {
        console.log(res.status);
        statusCode = res.status;
        setStatusImage();
        return res.json();
    }).then(json =>{
        console.log(json);
        setCatFact(json);
    })
    
}
function setCatFact(json) {
    output.textContent = json.data;
}
function setStatusImage() {//Normal API request doesn't work, so I directly set the image's src
    statusimg.src = baseImgURL+statusCode;
}

function overrideStatusImage() {
    statusCode = overtxt.value;
    setStatusImage();
}

getCatFact();

//IMG API - CORS error when fetching directly
/*
fetch (baseImgURL+statusCode, {
}).then(res=>{
    console.log(res.image_url);
})
*/
 
