const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const results = document.getElementById("result");
const speechRecognition  =window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
recognition.lang = 'tr-TR';
btn.addEventListener("click",()=>{
    recognition.start();
})
btn2.addEventListener("click",()=>{
    copyDivToClipboard();
})
recognition.onstart = ()=>{
    results.innerHTML="You can speak now";
}
recognition.onspeechend = function() {
    recognition.stop();
}
recognition.onresult = (e)=>{
    let text = e.results[0][0].transcript;
    results.innerHTML = text;
}
const copyDivToClipboard = () => {
    let range = document.createRange();
    range.selectNode(results);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Copied the text:")
}