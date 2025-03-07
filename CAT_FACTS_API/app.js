let url = "https://catfact.ninja/fact";
let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let div = document.querySelector("div");


btn.addEventListener("click", async ()=>{
    try{
        let res1 = await axios.get(url);
        div.innerText = res1.data.fact
        console.log(res1.data.fact);
    }catch(e){
        console.log("ERROR:",e);
    }
});