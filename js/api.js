const baseFactURL = "https://meowfacts.herokuapp.com/";
const baseImgURL = "https://http.cat/";

const code = document.querySelector("#code");
const statusimg = document.querySelector("#statusimg");
const output = document.querySelector("#output");
const overridebtn = document.querySelector("#overridebtn");

overridebtn.addEventListener("click",setStatusImage)

var statusCode = 404;
//Fact API
fetch(baseFactURL, {
}).then(res => {
    console.log(res.status);
    statusCode = res.status;
    return res.json();
}).then(json =>{
    console.log(json);
})

function setStatusImage() {//Normal API request doesn't work, so I directly set the image's src
    statusimg.src = baseImgURL+statusCode;
}

//IMG API - CORS error when fetching directly
/*
fetch (baseImgURL+statusCode, {
}).then(res=>{
    console.log(res.image_url);
})
*/
 
