// ==UserScript==
// @name         Fast PM
// @namespace    https://rucesocial.com
// @version      0.1
// @description  Fast PM Developed by RuceSocail.com
// @author       You
// @match        https://*.yoursitelink.com/*
// @grant        none
// ==/UserScript==

(function() {

    document.onreadystatechange = () => {
    var x = document.getElementsByClassName("message-inner");
    
    var i;
    
    for (i = 0; i < x.length; i++) {
    
    var username = document.getElementsByClassName("message-name");
    username=username[i].innerText;
    var linkEkle = document.getElementsByClassName("actionBar-set--external");
    
    
      var node = document.createElement("a");
      node.innerHTML=" Fast PM";
      node.style.paddingLeft ="10px";
      var baslik = document.getElementsByTagName("h1");
      baslik=baslik[0].innerText;
    var text;
    var text;
        for (let index = 0; index < 44; index++) {
         text+="                                        ";
    
    
        }
      node.setAttribute("href", "https://yoursitelink.com/conversations/add?to="+username+"&title="+baslik+"&message="+"Merhabalar şu konu hakkında detaylı bilgi alabilir miyim ? : "+window.location.href+text+" This message was sent with a fast PM Link: https://github.com/rucesocial/Xenforo-Fast-PM");
      node.setAttribute("class","fas fa-comments");
      node.setAttribute("title","www.rucesocial.com");
    
      node.setAttribute("id","fontx");
    
      linkEkle[i].appendChild(node);
    
    }
    };
    
    
    })();
