var i=0;
var con=document.getElementById('container');
var miniImg = document.getElementsByClassName("myimg");
console.log(miniImg);

var img=["https://th.bing.com/th/id/OIP.Nfd-_b2A1A1D6AsvReUmgAHaEc?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7","https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/1379640/pexels-photo-1379640.jpeg?auto=compress&cs=tinysrgb&w=600"];
function next(){
   miniImg[i].classList.remove("myactive");
       i++;
       if(i==img.length){
        i=0;
       }
       con.style.backgroundImage='url("' +img[i]+ '")';
       con.style.transitionDuration="1s";
       miniImg[i].classList.add("myactive");
}
function previous(){
    miniImg[i].classList.remove("myactive");
    i--;
    if (i < 0) { 
        i = img.length - 1; 
    }
    con.style.backgroundImage='url("' +img[i]+ '")';
    con.style.transitionDuration="1s";
    miniImg[i].classList.add("myactive");
}
