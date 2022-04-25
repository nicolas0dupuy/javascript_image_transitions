let fileList = ["../img/riviere1.jpg", "../img/riviere2.png"] ;
let img = new Image();
let ct = document.getElementById('myCanvas')
let ctx = ct.getContext('2d');
img.src = img.src = fileList[0];
img.addEventListener('load', function() {
  //  exécute les instructions drawImage ici
  ctx.drawImage(img, 0, 0, 500, 300);
}, false);

let n = 1;

ct.addEventListener("click", function(event) {  
  img.src = fileList[n];
  img.addEventListener('load', function() {
    //  exécute les instructions drawImage ici
    ctx.drawImage(img, 0, 0, 500, 300);
  }, false);
  n++;
  n = n%fileList.length;
  
}, false);





