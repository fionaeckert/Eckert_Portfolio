//-----------------------------------------------------------------------------------
var span = document.getElementById('span');

(function calendarDate() {
  var days = ['Sun','Mon','Tues','Wedn','Thurs','Fri','Sat'];

  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  Date.prototype.getMonthName = function() {
      return months[ this.getMonth() ];
  };
  Date.prototype.getDayName = function() {
      return days[ this.getDay() ];
  };
})();
var now = new Date();

var day = now.getDayName();
var month = now.getMonthName();
var date = now.getDate();


function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
   day + " " + month + " " + date + " " +("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);
//-----------------------------------------------------------------------------------
// Get the local time of the visitor
var localTime = new Date();
var localHour = localTime.getHours();
            
// Bool to determine if it is night or day
var is15 = ( 1 <= localHour || 2.5 >= localHour ) ? true : false;
var is16 = ( 2.5 <= localHour || 4 >= localHour ) ? true : false;
var is1 = ( 4 <= localHour || 5.5 >= localHour ) ? true : false;
var is2 = ( 5.5 <= localHour || 7 >= localHour ) ? true : false;
var is3 = ( 7 <= localHour || 8.5 >= localHour ) ? true : false;
var is4 = ( 8.5 <= localHour || 10 >= localHour ) ? true : false;
var is5 = ( 10 <= localHour || 11.5 >= localHour ) ? true : false;
var is6 = ( 11.5 <= localHour || 13 >= localHour ) ? true : false;
var is7 = ( 13 <= localHour || 14.5 >= localHour ) ? true : false;
var is8 = ( 14.5 <= localHour || 16 >= localHour ) ? true : false;
var is9 = ( 16 <= localHour || 17.5 >= localHour ) ? true : false;
var is10 = ( 17.5 <= localHour || 19 >= localHour ) ? true : false;
var is11 = ( 19 <= localHour || 20.5 >= localHour ) ? true : false;
var is12 = ( 20.5 <= localHour || 22 >= localHour ) ? true : false;
var is13 = ( 22 <= localHour || 23.5 >= localHour ) ? true : false;
var is14 = ( 23.5 <= localHour || 1 >= localHour ) ? true : false;

            
// Object containing URL links to images 
const  backgroundImages = {
    fifteen: './wallpaper/mojave_dynamic_technastic.com_15.jpeg',
    sixteen: './wallpaper/mojave_dynamic_technastic.com_16.jpeg',
    one: './wallpaper/mojave_dynamic_technastic.com_1.jpeg',
    two: './wallpaper/mojave_dynamic_technastic.com_2.jpeg',
    three: './wallpaper/mojave_dynamic_technastic.com_3.jpeg',
    four: './wallpaper/mojave_dynamic_technastic.com_4.jpeg',
    five: './wallpaper/mojave_dynamic_technastic.com_5.jpeg',
    six: './wallpaper/mojave_dynamic_technastic.com_6.jpeg',
    seven: './wallpaper/mojave_dynamic_technastic.com_7.jpeg',
    eight: './wallpaper/mojave_dynamic_technastic.com_8.jpeg',
    nine: './wallpaper/mojave_dynamic_technastic.com_9.jpeg',
    ten: './wallpaper/mojave_dynamic_technastic.com_10.jpeg',
    eleven: './wallpaper/mojave_dynamic_technastic.com_11.jpeg',
    twelve: './wallpaper/mojave_dynamic_technastic.com_12.jpeg',
    thirteen: './wallpaper/mojave_dynamic_technastic.com_13.jpeg',
    fourteen: './wallpaper/mojave_dynamic_technastic.com_14.jpeg',
};
                
// Sets the background image
function setBackground (image) {
  console.log('inside setBackground')
    document.body.style.background = backgroundImages[image];
  };
            
// Actually set the background based on the bool and URL object. 
if ( is15 == true) {
  setBackground('fifteen');
} 
if ( is16 == true ) {
  setBackground('sixteen');
}
if ( is1 == true ) {
  setBackground('one');
}
if ( is2 == true ) {
  setBackground('two');
}
if ( is3 == true ) {
  setBackground('three');
}
if ( is4 == true ) {
  setBackground('four');
}
if ( is5 == true ) {
  setBackground('five');
}
if ( is6 == true ) {
  setBackground('six');
}
if ( is7 == true ) {
  setBackground('seven');
}
if ( is8 == true ) {
  setBackground('eight');
}
if ( is9 == true ) {
  setBackground('nine');
}
if ( is10 == true ) {
  setBackground('ten');
}
if ( is11 == true ) {
  setBackground('eleven');
}
if ( is12 == true ) {
  setBackground('twelve');
}
if ( is13 == true ) {
  setBackground('thirteen');
}
if ( is14 == true ) {
  setBackground('fourteen');
}
//-----------------------------------------------------------------------------------
let project1Folder = dragElement(document.getElementById("project1Div"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//-----------------------------------------------------------------------------------
let resumeImage = dragElement(document.getElementById("resumeDiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
//-----------------------------------------------------------------------------------
let postgresImage = dragElement(document.getElementById("postgresDiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
//-----------------------------------------------------------------------------------
let postmanImage = dragElement(document.getElementById("postmanDiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
//-----------------------------------------------------------------------------------
let project2Image = dragElement(document.getElementById("project2Div"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
//-----------------------------------------------------------------------------------
let aboutMeImage = dragElement(document.getElementById("aboutMeDiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Get the modal
var modal = document.getElementById("aboutMeModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("aboutMeImage");
var modalImg = document.getElementById("aboutMePopUp");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var div = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
div.onclick = function() {
  modal.style.display = "none";
}
//-----------------------------------------------------------------------------------
let eightBallDiv = dragElement(document.getElementById("eightBallDiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
var popup = document.getElementById("myPopup");
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd02dc84b57mshedc2b1f6614dd8ap18fc18jsn952a46505a27',
    'X-RapidAPI-Host': 'magic-8-ball1.p.rapidapi.com'
  }
};
const getAFortune = () => {
  fetch('https://magic-8-ball1.p.rapidapi.com/my_answer/?question=I%20will%20succeed%20%3F', options)
    .then(response => response.json())
    .then(response => {
      popup.innerText = response.answer
    })}