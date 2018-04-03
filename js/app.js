(function (){
    //variabelen declareren
    let txtInput
        
    document.addEventListener("DOMContentLoaded", init);
    function init(){
        //Variabelen toekenen
        txtInput = document.getElementById("txtInput");
        btnSend = document.getElementById("btnSend").addEventListener("click",send);

        //Al een chat bericht versturen
        renderHtml("Stuur een bericht & krijg een Chuck Norris bericht!", true)
    }

    function send(){
        //Render html van de input text als deze niet niet leeg is
        if(txtInput.value != "")
            renderHtml(txtInput.value, true);
        // txtInput.value = ""; //Input resetten 

        //Api aanspreken
        http.get("https://api.chucknorris.io/jokes/random").then(function(response){
            console.log(response);
            renderHtml(response.value, false)
        });
    }

    function renderHtml(message, isSend){
        let bobTheHTMLBuilder = ``;
        if(isSend == true){
            bobTheHTMLBuilder += `
            <li class="send"><div class="bubble bubble__send">${message}</div></li>
            `;
        } else{
            bobTheHTMLBuilder += `
            <li><div class="bubble bubble__recieved">${message}</div></li>
            `;
        }
        document.querySelector(".messages").innerHTML += bobTheHTMLBuilder;
    }



}());