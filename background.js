
   


document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.captureVisibleTab(null, function(img) {
     var xhr = new XMLHttpRequest(), formData = new FormData();  
     formData.append("img", img);
     xhr.open("POST", "http://myserver.com/submitImage", true);
     xhr.send(formData);
   });
});