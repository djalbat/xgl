"use strict";

const liveReloadSnippet = `

  <script>
  
    var xmlHttpRequest = new XMLHttpRequest();
  
    xmlHttpRequest.onreadystatechange = function() {
      if (xmlHttpRequest.readyState == 4) {
        if (xmlHttpRequest.status == 200) {
          location.reload();
        }
      }
    };
  
    xmlHttpRequest.open("GET", "http://localhost:3333");
  
    xmlHttpRequest.send();
  
  </script>

`;

module.exports = liveReloadSnippet;
