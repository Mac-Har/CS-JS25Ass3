const baseFactURL = "https://meowfacts.herokuapp.com/";
const baseImgURL = "https://http.cat/";

fetch(baseFactURL, {
}).then(res => {
    return res.json();
}).then(json =>{
    console.log(json)
})