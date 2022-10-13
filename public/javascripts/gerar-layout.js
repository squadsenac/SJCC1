'use strict';
let botGerar = document.getElementById("botaogerar");
let espacoLayout = document.getElementById("localdolayout");
const URL = "http://localhost:3000/";
   
    function gerarLayout() {
      console.log("Gerando layout...");
      
      let req = new XMLHttpRequest();
      req.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          let response = JSON.stringify(this.response);
          console.log(this.response);
          espacoLayout.innerHTML = this.responseText;
          console.log(this.getAllResponseHeaders());
        }
      };
      req.open("GET", URL);
      req.setRequestHeader("Content-Type", "text/plain");
      req.send();
    };

    