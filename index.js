var play;
var list = [];
var available = [];
var ready = true;
var ready2 = true;
var database,ref;
var player;
var rname;
var p1name;
var winner="";
var p2name;
var mod = 0;
var ai_moves, ply_moves;
var over = false;
var started = false;
var ini = true;
var moves="";
var mov1, mov2;
firebase_setup();
function $(id){
return document.getElementById(id);
}
function _(clas){
return document.getElementsByClassName(clas);    
}
function tag(tagName){
return document.getElementsByTagName(tagName)[0];
}
function create() {
   let name =$("name").value.split("<").join("&lt;");
   rname =$("room").value.split("<").join("&lt;");
    if (ini) {
        ini = false;
        let m = _("grou");
        m[0].classList.add("showem")
        m[1].classList.add("showem")
        $("cbtn").style.transform = "translateY(30px) scale(1.2)"
        $("jbtn").classList.add("remove");       
        return;
    }
    if(name.length > 10)name = name.substring(0,11)+"...";
    
    if (name === "" || rname === "") {
        alert("Insufficient Information!!");
        return;
    }
    //firebase_setup();
    if (!list.includes(rname)) {
        $("form").classList.add("slide2");
     
        setTimeout(() =>{ 
        
 $("form").style.visibility="hidden";
 $("moves").style.visibility ="visible";
 tag("h5").classList.add("showem");
 }, 1000);
       // fill1.innerHTML = name;
  $("moves").style.opacity =1;      
        started = true;
        
     
      
      
    } else {
        alert("Room Already Exists\nPlease Change Room Name");
        return;
    }
    
    
}

function join() {
    if (ini) {
        ini = false;
        let m = _("grou");
        m[0].classList.add("showem")
        m[1].classList.add("showem")
        m[1].style.display = "none";
        tag("h6").classList.add("showem");
        tag("h6").style.display = "block";
        $("alist").style.display = "block"
        $("alist").classList.add("showem");
        $("jbtn").classList.add("remove")
        $("cbtn").classList.add("remove");
        
        return;
    }
    let name = $("name").value.split("<").join("&lt;")
    mov2 = moves;       
    if (name === "" || rname === "") {
        alert("Insufficient Information");
        return
    }
    if (!list.includes(rname)) {
        alert("Room not found! Please check the name");
        return;
    } else {
                $("form").classList.add("slide2");
       
        setTimeout(() => {
 $("form").style.display="none";          
 $("moves1").style.visibility ="visible";
 tag("h5").classList.add("showem");        
        }, 1000);
       // fill2.innerHTML = name;
    $("moves1").style.opacity =1;
    }
}
var changed_move;

function update(){


   if(play.m1=="paper" &&
play.m2=="rock"){
    $("name1").innerHTML = play.p1;
    $("name2").innerHTML = play.p2;
    winner=play.p1+" won the match!!";
    setTimeout(()=>{
     $("result").style.visibility = "visible";
$("result").style.animation ="pop .7s linear"   
},1000);
   $("result").innerHTML=winner; 
    let frezeRef = firebase.database().ref("/rooms/"+rname);
      // console.log(rname);
       frezeRef.off("value");
       frezeRef.remove()
   // player.splice(2)
    
}
 else if(play.m1 =="rock" && play.m2 =="scissor"){
 $("name1").innerHTML = play.p1;
    $("name2").innerHTML = play.p2;
    winner=play.p1+" won the match!!";
    setTimeout(()=>{
     $("result").style.visibility = "visible";
$("result").style.animation ="pop .7s linear"   
},1000);
  $("result").innerHTML=winner;  
     let frezeRef = firebase.database().ref("/rooms/"+rname);
     //  console.log(rname);
       frezeRef.off("value");
       frezeRef.remove()
     
 }
 else if(play.m1 =="rock" && play.m2 =="paper"){
     $("name1").innerHTML = play.p1;
    $("name2").innerHTML = play.p2;
     winner=play.p2+" won the match!!";
    setTimeout(()=>{
     $("result").style.visibility = "visible";
$("result").style.animation ="pop .7s linear"   
},1000); 
   $("result").innerHTML=winner;   
     let frezeRef = firebase.database().ref("/rooms/"+rname);
     //  console.log(rname);
       frezeRef.off("value");
       frezeRef.remove()
 }
 else if(play.m1 =="scissor" && play.m2 =="paper"){
     $("name1").innerHTML = play.p1;
    $("name2").innerHTML = play.p2;
     winner =play.p1 +" won the match!!";
  setTimeout(()=>{
     $("result").style.visibility = "visible";
$("result").style.animation ="pop .7s linear"   
},1000);    
   $("result").innerHTML=winner;  
      let frezeRef = firebase.database().ref("/rooms/"+rname);
     //  console.log(rname);
       frezeRef.off("value");
       frezeRef.remove()
 }
 else if(play.m1 == "paper" && play.m2 =="scissor"){
    $("name1").innerHTML = play.p1;
    $("name2").innerHTML = play.p2;
     winner = play.p2 +" won the match!!";
setTimeout(()=>{
     $("result").style.visibility = "visible";
$("result").style.animation ="pop .7s linear"   
},1000);      
  $("result").innerHTML=winner;   
      let frezeRef = firebase.database().ref("/rooms/"+rname);
      // console.log(rname);
       frezeRef.off("value");
       frezeRef.remove()
 }
 else if(play.m1 =="scissor" && play.m2 =="rock"){
    $("name1").innerHTML = play.p1;
    $("name2").innerHTML = play.p2;
    winner =play.p2 +" won the match!!" ;
   setTimeout(()=>{
     $("result").style.visibility = "visible";
$("result").style.animation ="pop .7s linear"   
},1000);  
  $("result").innerHTML=winner;  
    let frezeRef = firebase.database().ref("/rooms/"+rname);
      // console.log(rname);
       frezeRef.off("value");
       frezeRef.remove()
 }
 else if((play.m1 =="paper" && play.m2 =="paper") ||(play.m1 =="rock" && play.m2 =="rock") ||(play.m1 =="scissor" && play.m2 =="scissor") ){
 $("name1").innerHTML = play.p1;
    $("name2").innerHTML = play.p2;
    winner="Match Draw!!"
    setTimeout(()=>{
     $("result").style.visibility = "visible";
$("result").style.animation ="pop .7s linear"   
},1000);   
    $("result").innerHTML=winner;
     let frezeRef = firebase.database().ref("/rooms/"+rname);
     //  console.log(rname);
       frezeRef.off("value");
       frezeRef.remove()
 }
   
  
}
function firebase_setup(){   
firebase.initializeApp({
    databaseURL: "https://rps-online-cbaef.firebaseio.com",
});
database = firebase.database();
ref=database.ref("rooms/");
ref.on("value", function(data){
if(data.val() !== null && data.val() !== undefined) {
 list = Object.keys(data.val());                    Object.keys(data.val()).forEach(function (key){
let value = data.val();
let p = value[key];
if(p.p2 === "")available.push(key);
 })
  var alist = $("alist");
  alist.innerHTML = "";
 let roomNames = tag("h6");
roomNames.innerHTML = available.length > 0 ? "Available Rooms:" : "No Rooms Available!";
 available.forEach(function(roo){
let curlist = document.createElement("li");
  curlist.innerHTML = roo;
  curlist.style.color="#000";
  curlist.onclick = function () {
    rname=roo;
    join();    
   };   
alist.appendChild(curlist);
});
                }
            }); 
}
function rock(){
    $("moves").style.animation="hide 1s linear";
   tag("h5").classList.add("remove");
       $("info").style.opacity =0;
    setTimeout(()=>{
    tag("h5").style.visibility="hidden";
   
    $("moves").style.visibility="hidden";
      $("moves").style.display = "none" ;
     $("info").style.visibility ="visible"; 
      $("info").style.animation ="shown 1s linear"
      $("info").style.opacity =1;
      
    },1000)
    if(ready){
    ready = false;
   moves = "rock";
   let name = $("name").value.split("<").join("&lt;");
   rname =$("room").value.split("<").join("&lt;");
    if (name.length > 10)
   name = name.substring(0,11) + "...";
   mov1= "rock";
   var add = database.ref("/rooms/" + rname);
        let room = {
         p1 : "",
         p2 : "",
         m1 : "",
         m2 : "", 
        }
        room.p1 = name;
        room.m1 = mov1;
        $("name1").innerHTML = room.p1;
        add.set(room);
        add.on("value", data => {
            play = data.val();
            if (play.p2 !== "") {
                p2name = play.p2;                
            }
            update();
            
        });   
}
}
function paper(){
    tag("h5").classList.add("remove");
      $("moves").style.animation="hide 1s linear";
     $("info").style.opacity =0;
    setTimeout(()=>{
    tag("h5").style.visibility="hidden";
    $("moves").style.visibility="hidden";
      $("moves").style.display = "none" ;
      $("info").style.visibility ="visible"; 
      $("info").style.animation ="shown 1s linear"
      $("info").style.opacity =1;
      
    },1000)
    if(ready){
    ready = false;
    moves = "paper";
    //ready =true;
     let name = $("name").value.split("<").join("&lt;");
     if (name.length > 10)
        name = name.substring(0,11) + "..."; 
   rname =$("room").value.split("<").join("&lt;");
   mov1= "paper";
   var add = database.ref("/rooms/" + rname);
        let room = {
         p1 : "",
         p2 : "",
         m1 : "",
         m2 : "", 
        }
        room.p1 = name;
        room.m1 = mov1;
     $("name1").innerHTML = room.p1;   
        add.set(room);
        add.on("value", data => {
            play = data.val();
            if (play.p2 !== "") {
                p2name = play.p2;
                
            }
            update();
            
        });
   }
}
function scissor(){
     $("moves").style.animation="hide 1s linear";
    tag("h5").classList.add("remove");
     $("info").style.opacity =0;
    setTimeout(()=>{
    tag("h5").style.visibility="hidden";
   
    $("moves").style.visibility="hidden";
      $("moves").style.display = "none" ;
      $("info").style.visibility ="visible"; 
      $("info").style.animation ="shown 1s linear"
      $("info").style.opacity =1;
      
  
    },1000)
    if(ready){
    ready = false;
    moves = "paper";
    //ready =true;
     let name = $("name").value.split("<").join("&lt;");
      if (name.length > 10)
        name = name.substring(0,11) + "...";
   rname =$("room").value.split("<").join("&lt;");
   mov1= "scissor";
   var add = database.ref("/rooms/" + rname);
        let room = {
         p1 : "",
         p2 : "",
         m1 : "",
         m2 : "", 
        }
        room.p1 = name;
        room.m1 = mov1;
        $("name1").innerHTML = room.p1;
        add.set(room);
        add.on("value", data => {
            play = data.val();
            if (play.p2 !== "") {
                p2name = play.p2;
                
            }
            update();
            
        });
   }
}
function rock1(){
    tag("h5").classList.add("remove");
    $("moves1").style.animation="hide 1s linear";
    $("info").style.opacity =0;
    setTimeout(()=>{
    tag("h5").style.visibility="hidden";
   
    $("moves").style.visibility="hidden";
      $("moves1").style.display = "none" ;
     $("info").style.visibility ="visible"; 
      $("info").style.animation ="shown 1s linear"
      $("info").style.opacity =1;
    },1000)
     if(ready2){
    ready2 = false;
      var join = database.ref("/rooms/" + rname);
        join.on("value", data => {
            play = data.val();
            if (!started) {
            if (play.p2 !== "") {
                alert("Room Full!");
                join.off("value");
                return;
            }
            }             
       let name =$("name").value.split("<").join("&lt;");
      if (name.length > 10)
        name = name.substring(0,11) + "...";  
       mov2 ="rock";
        p2name = name;
        started = true;        
            play.p2 = name;
            play.m2 = mov2;
     $("name2").innerHTML = play.p2;
     $("name1").innerHTML = play.p1;          
            join.set(play);
            p1name = play.p1;
       update(); 
         
        });
}
}
function paper1(){
    tag("h5").classList.add("remove");
     $("moves1").style.animation="hide 1s linear";
    $("info").style.opacity =0;
    setTimeout(()=>{
    tag("h5").style.visibility="hidden";       
    $("moves1").style.visibility="hidden";
      $("moves1").style.display = "none" ;
      $("info").style.visibility ="visible"; 
      $("info").style.animation ="shown 1s linear"
      $("info").style.opacity =1;
    },1000)
     if(ready2){
    ready2 = false;
    var join = database.ref("/rooms/" + rname);
        join.on("value", data => {
            play = data.val();
            if (!started) {
            if (play.p2 !== "") {
                alert("Room Full!");
                joim.off("value");
                return;
            }
            }             
       let name =$("name").value.split("<").join("&lt;");
      if (name.length > 10)
        name = name.substring(0,11) + "...";  
       mov2 ="paper";
        p2name = name;
        started = true;        
            play.p2 = name;
            play.m2 = mov2;
         $("name2").innerHTML = play.p2;    
          $("name1").innerHTML = play.p1;     
            join.set(play);
            p1name = play.p1;
       update(); 
         
        });
}
}
function scissor1(){
    tag("h5").classList.add("remove");
     $("moves1").style.animation="hide 1s linear";
    $("info").style.opacity =0;
    setTimeout(()=>{
    tag("h5").style.visibility="hidden";
   
    $("moves1").style.visibility="hidden";
      $("moves1").style.display = "none" ;
     $("info").style.visibility ="visible"; 
      $("info").style.animation ="shown 1s linear"
      $("info").style.opacity =1;
    },1000)
    if(ready2){
    ready2 = false;
    var join = database.ref("/rooms/" + rname);
        join.on("value", data => {
            play = data.val();
            if (!started) {
            if (play.p2 !== "") {
                alert("Room Full!");
                join.off("value");
                return;
            }
            }             
       let name =$("name").value.split("<").join("&lt;");
      if (name.length > 10)
        name = name.substring(0,11) + "...";  
       mov2 ="scissor";
        p2name = name;
        started = true;        
            play.p2 = name;
            play.m2 = mov2;
     $("name2").innerHTML = play.p2;
      $("name1").innerHTML = play.p1;             
            join.set(play);
            p1name = play.p1;
       update(); 
         
        });
}
}