//API urls
const baseFactURL = "https://meowfacts.herokuapp.com/";
const baseImgURL = "https://http.cat/";
//query selectors
const code = document.querySelector("#code");
const statusimg = document.querySelector("#statusimg");
const output = document.querySelector("#output");
const overridebtn = document.querySelector("#overridebtn");
const newfactbtn = document.querySelector("#newfactbtn");
const overtxt = document.querySelector("#overtxt")
//Buttons
overridebtn.addEventListener("click", overrideStatusImage)
newfactbtn.addEventListener("click", getCatFact)

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
//If the user wants to see other status codes
function overrideStatusImage() {
    statusCode = overtxt.value;
    setStatusImage(); // https://http.cat/ to see all the images
}
//Initialize the site
getCatFact();

//IMG API - CORS error when fetching directly
/*
fetch (baseImgURL+statusCode, {
}).then(res=>{
    console.log(res.image_url);
})
*/
 
