const baseFactURL = "https://meowfacts.herokuapp.com/";
const baseImgURL = "https://http.cat/";

var statusCode =404;
//Fact API
fetch(baseFactURL, {
}).then(res => {
    console.log(res.status);
    statusCode = res.status;
    return res.json();
}).then(json =>{
    console.log(json)
})

//IMG API
fetch (baseImgURL+statusCode, {
}).then(res=>{
    console.log(res);
})