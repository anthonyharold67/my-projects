const döviz = async ()=>{
    const kur = await fetch("https://finans.truncgil.com/today.json");
    const text =await kur.json();
    console.log(text)
    let newArea=`
    <li> <b>$ USD</b> <br>Alış:${text.USD.Alış}₺  Satış: ${text.USD.Satış}₺ Değişim: <span class="degisim">${text.USD.Değişim}</span> </li>
    <li><b>€ EURO</b><br>Alış:${text.EUR.Alış}  Satış: ${text.EUR.Satış} Değişim: <span class="degisim">${text.EUR.Değişim}</span></li>
    <li><b>GRAM ALTIN</b><br>Alış:${Object.values(text)[68].Alış}  Satış: ${Object.values(text)[68].Satış} Değişim:<span class="degisim"> ${Object.values(text)[68].Değişim}</span></li>
    `;
    
    document.getElementById("döviz").innerHTML = newArea;
    let degisim =document.querySelectorAll(".degisim");
    degisim.forEach((i,index)=>{
        let number = degisim[index].textContent.replace(",",".").replace("%","");
        if(number>0){
            i.style.color= "green";
        }else{
            i.style.color= "red";
        }
    });
    document.getElementById("header").innerHTML = "Güncellenme Tarihi: " + text.Update_Date;
    document.getElementById("calc").addEventListener("click",()=>{
    let miktar= document.getElementById("miktar").value;
    let dolarPrice = text.USD.Alış.replace(",",".");
    let euroPrice = text.EUR.Alış.replace(",",".");
    let altinPrice = Object.values(text)[68].Alış.replace(".","").replace(",",".");
    let dolarS = text.USD.Satış.replace(",",".");
    let euroS = text.EUR.Satış.replace(",",".");
    let altinS = Object.values(text)[68].Satış.replace(".","").replace(",",".");
    let usd = document.getElementById("usd");
    let euro = document.getElementById("eur");
    let altin = document.getElementById("altin");
    if(usd.checked) {
        let result = +(dolarPrice) * +(miktar);
        let resultS = +(dolarS) * +(miktar);
        document.getElementById("sonuc").innerHTML= `${miktar} USD Alış Fiyatı : ${result.toFixed(2)}₺
        <br>${miktar} USD Satış Fiyatı : ${resultS.toFixed(2)}₺
        `;
    }else if(euro.checked){
        let result = +(euroPrice) * +(miktar);
        let resultS = +(euroS) * +(miktar);
        console.log(euroPrice);
        console.log(miktar)
        document.getElementById("sonuc").innerHTML=`${miktar} Euro Alış Fiyatı : ${result.toFixed(2)}₺
        <br>${miktar} Euro Satış Fiyatı : ${resultS.toFixed(2)}₺
        `;
    }else if(altin.checked) {
        let result = +(altinPrice) * +(miktar);
        let resultS = +(altinS) * +(miktar);
        console.log(altinS);
        console.log(miktar)
        
        document.getElementById("sonuc").innerHTML= `${miktar} Gram Altın Alış Fiyatı : ${result.toFixed(2)}₺
        <br>${miktar} Gram Altın Satış Fiyatı : ${resultS.toFixed(2)}₺
        ` ;
    }
    
})
}
window.addEventListener("load",()=>{
    döviz();
    setInterval(()=>{
        döviz();
    },1000000)
});
