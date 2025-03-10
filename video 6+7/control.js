import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  set,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGlAguCGqnB6wodIqHcGTYkqgY8Cfn2l8",
  authDomain: "connect-db-f8796.firebaseapp.com",
  projectId: "connect-db-f8796",
  storageBucket: "connect-db-f8796.firebasestorage.app",
  messagingSenderId: "921943184859",
  appId: "1:921943184859:web:91294b11a69559deb103fe",
  measurementId: "G-709P0ESPG7",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Lấy dữ liệu nhiệt độ từ database và hiển thị
const temp = document.getElementById("temp");
const tempRef = ref(database, "/IoT lab/temperature");

onValue(tempRef, (snapshot) => {
  let t = snapshot.val();
  temp.innerHTML = t;
});

// Điều khiển đèn LED 01
const led01_on = document.getElementById("led01_on");
const led01_off = document.getElementById("led01_off");
const pic01 = document.getElementById("pic01");

led01_on.onclick = function () {
  pic01.src = "sáng-removebg-preview.png";
  console.log("Turn on");
  set(ref(database, "/IoT lab/Light01"), { Light01: 1 });
};

led01_off.onclick = function () {
  pic01.src = "tắt-removebg-preview.png";
  console.log("Turn off");
  set(ref(database, "/IoT lab/Light01"), { Light01: 0 });
};

// Điều khiển đèn LED 02
const led02_on = document.getElementById("led02_on");
const led02_off = document.getElementById("led02_off");
const pic02 = document.getElementById("pic02");

led02_on.onclick = function () {
  pic02.src = "sáng-removebg-preview.png";
  console.log("Turn on");
  set(ref(database, "/IoT lab/Light02"), { Light02: 1 });
};

led02_off.onclick = function () {
  pic02.src = "tắt-removebg-preview.png";
  console.log("Turn off");
  set(ref(database, "/IoT lab/Light02"), { Light02: 0 });
};

// Điều khiển đèn LED 03
const led03_on = document.getElementById("led03_on");
const led03_off = document.getElementById("led03_off");
const pic03 = document.getElementById("pic03");

led03_on.onclick = function () {
  pic03.src = "sáng-removebg-preview.png";
  console.log("Turn on");
  set(ref(database, "/IoT lab/Light03"), { Light03: 1 });
};

led03_off.onclick = function () {
  pic03.src = "tắt-removebg-preview.png";
  console.log("Turn off");
  set(ref(database, "/IoT lab/Light03"), { Light03: 0 });
};

// Điều khiển đèn LED 04
const led04_on = document.getElementById("led04_on");
const led04_off = document.getElementById("led04_off");
const pic04 = document.getElementById("pic04");

led04_on.onclick = function () {
  pic04.src = "sáng-removebg-preview.png";
  console.log("Turn on");
  set(ref(database, "/IoT lab/Light04"), { Light04: 1 });
};

led04_off.onclick = function () {
  pic04.src = "tắt-removebg-preview.png";
  console.log("Turn off");
  set(ref(database, "/IoT lab/Light04"), { Light04: 0 });
};
