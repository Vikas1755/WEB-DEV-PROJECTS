let url = "http://universities.hipolabs.com/search?name=";
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",()=>{
    let country = inp.value;
    let newurl = url+country;
    getColleges(newurl);
});

async function getColleges(newurl){
    try{
        let res = await axios.get(newurl);
        ul.innerHTML = "";
        for(let i=0;i<res.data.length;i++){
            ul.innerHTML += `<li>${res.data[i].name} <br> @${res.data[i].web_pages}</li><br>`;
        }
    }catch(e){
        console.log("ERROR:",e);
    }
}
