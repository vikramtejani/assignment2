//Question#01
// function addNumber(x) {
//      return function (y) {
//           return x + y;
//      }
// }
// var addFive = addNumber(5);
// console.log(addFive(2));

//Question#02
// var myArray = [1, 2, 3, 4, 5, -1, 0];
// function searchArray(arr, val) {
//      if (arr.length === 0) {
//           return false;
//      }

//      if (arr[0] === val) {
//           return true;
//      } else {
//           return searchArray(arr.slice(1), val);
//      }
// }
// console.log(searchArray(myArray, 2)); 

//Question#03
// let para1 = document.getElementById("para")

// let para2 = document.createElement("p")
// para1.appendChild(para2)
// let stringData = document.createTextNode("Hi, Sir")
// para2.appendChild(stringData);

//Question#04
// let mainBox = document.getElementById("todo");
// var mainDiv = document.createElement("div");
// mainDiv.setAttribute("id", "mainInput");
// mainBox.appendChild(mainDiv);

// var input = document.createElement("input");
// input.setAttribute("placeholder", "Enter anything");
// input.setAttribute("id", "input");
// mainDiv.appendChild(input);

// var pluBtn = document.createElement("button");
// pluBtn.setAttribute("onclick", "addData()");
// mainDiv.appendChild(pluBtn);

// var btnData = document.createTextNode("ADD")
// pluBtn.appendChild(btnData)

// var msg = document.createElement("p");
// msg.setAttribute("id", "msg");
// mainBox.appendChild(msg);

// var dataUl = document.createElement("ul");
// mainBox.appendChild(dataUl)

// function addData() {
//      var dataMsg = document.getElementById("input").value;

//      var dataLi = document.createElement("li");
//      dataUl.appendChild(dataLi);

//      var liText = document.createTextNode(dataMsg);
//      dataLi.appendChild(liText);

//      var liTextData = document.createTextNode(dataMsg);
//      liText.appendChild(liTextData);

//      document.getElementById("input").value = "";
// }

//Question#05
// let myPara = document.getElementById("paragraph");

// myPara.innerHTML = "<b>Hi, Sir</b>";
// myPara.style.backgroundColor = "blue";
// myPara.style.color = "pink";
// myPara.style.padding = "7px";

// let text = document.createElement("p");
// myPara.appendChild(text);
// let textdata = document.createTextNode("Saylani");
// text.appendChild(textdata);
// text.style.backgroundColor = "green";
// text.style.color = "pink";

//Question#06
// function saveObjectToLocalStorage(key, obj) {
//      localStorage.setItem(key, JSON.stringify(obj));
//    }
//    var myObj = {name: "Vikram Kumar", age: 22, city: "Tharparkar"};
// saveObjectToLocalStorage("myKey", myObj);


//Question#07
// function getObjectFromLocalStorage(key) {
//      var storedObj = localStorage.getItem(key);
//      return storedObj ? JSON.parse(storedObj) : null;
//    }
//    var myObj = getObjectFromLocalStorage("myKey");
// console.log(myObj);


//Question#08
// function saveToLocalStorage(obj) {
//      for (var prop in obj) {
//           if (obj.hasOwnProperty(prop)) {
//                localStorage.setItem(prop, JSON.stringify(obj[prop]));
//           }
//      }
//      var newObj = {};
//      for (var i = 0; i < localStorage.length; i++) {
//           var key = localStorage.key(i);
//           newObj[key] = JSON.parse(localStorage.getItem(key));
//      }
//      return newObj;
// }
// var myObj = { name: 'vikram', age: 30, city: 'Karachi' };
// var newObj = saveToLocalStorage(myObj);
// console.log(newObj); Á