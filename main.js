console.log('Hello World!');
let x=1;
 let image = document.getElementById("img1");
 function preimg() {
   x-=1;
   if(x<=0)
   {
     x=1;
  image.src="images/image.1jpg";
   }
   image.src="images/image"+x+".jpg";
 }
 function nextimg() {
   x+=1;
   if(x>=12)
   {
     x=11;
  image.src="images/image11.jpg "
   }
  image.src="images/image"+x+".jpg";
 }