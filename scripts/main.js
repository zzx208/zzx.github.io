let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
/*document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
  });*/
let myimage = document.querySelector('img');
myimage.onclick = function(){
    let mysrc = myimage.getAttribute('src');
    if(mysrc == 'images/1.jpg'){
        myimage.setAttribute('src', 'images/2.png');
    }else{
        myimage.setAttribute('src', 'images/1.jpg');
    }
}
let myButton = document.querySelector('button');
//let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    localStorage.clear();
  }
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  
}
myButton.onclick = function() {
    setUserName();
 }
