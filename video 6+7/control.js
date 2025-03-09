  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD8BUyRPGLIKP7fwSZRe04NNOijxOWxgc4",
    authDomain: "tt-iot-c69a6.firebaseapp.com",
    databaseURL: "https://tt-iot-c69a6-default-rtdb.firebaseio.com",
    projectId: "tt-iot-c69a6",
    storageBucket: "tt-iot-c69a6.firebasestorage.app",
    messagingSenderId: "107225342345",
    appId: "1:107225342345:web:d8cca541b9f2b012778158"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  
//Khai báo biến
const led01_on = document.getElementById("led01_on");
const led01_off = document.getElementById("led01_off");
const pic01 = document.getElementById("pic01");

//update data temp
const temp = document.getElementById("temp")
database.ref("/IoT lab/temperature").on("value", function(snapshot){
    let t = snapshot.val();
    temp.innerHTML = t;
})

led01_on.onclick = function(){
    pic01.src = "sáng-removebg-preview.png";

     database.ref("/IoT lab/Light01").update({
        "Light01" : 1
     })
}
led01_off.onclick = function(){
    pic01.src = "tắt-removebg-preview.png";

     database.ref("/IoT lab/Light01").update({
        "Light01" : 0
     })
}


const led02_on = document.getElementById("led02_on");
const led02_off = document.getElementById("led02_off");
const pic02 = document.getElementById("pic02");
led02_on.onclick = function(){
    pic02.src = "sáng-removebg-preview.png";
}
led02_off.onclick = function(){
    pic02.src = "tắt-removebg-preview.png";
}


const led03_on = document.getElementById("led03_on");
const led03_off = document.getElementById("led03_off");
const pic03 = document.getElementById("pic03");
led03_on.onclick = function(){
    pic03.src = "sáng-removebg-preview.png";
}
led03_off.onclick = function(){
    pic03.src = "tắt-removebg-preview.png";
}


const led04_on = document.getElementById("led04_on");
const led04_off = document.getElementById("led04_off");
const pic04 = document.getElementById("pic04");
led04_on.onclick = function(){
    pic04.src = "sáng-removebg-preview.png";
}
led04_off.onclick = function(){
    pic04.src = "tắt-removebg-preview.png";
}


