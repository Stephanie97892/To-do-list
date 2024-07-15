// Create variables that will interact with the DOM
const inputBox = document.getElementById ("input-box")
const listContainer = document.getElementById ("list-container") 


//!ADD LI ELEMENT TO LIST
//This is a fucntion that interacts with the DOM
function addTask(){  
    if(inputBox.value ===''){
        alert("You must enter some text!")
    }
    else{
        let li =document.createElement("li"); 
        li.innerHTML = inputBox.value;  // We target the innerhtml of the variable craeted that why names must match 
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '<i class="fas fa-x"></i>';   // not using the uncode here 
        li.appendChild(span);   // attach the nnew span to the li
    }
    inputBox.value= '';
    saveData (); // function called to save data
}
/*
This function is called when clicked in the html.
If - the the value of the inputbox is strictly = to nothing , make the alert
Else -  we make a list item and add to the list Container.
first create the element, assign it an inner value then attach it to the container.
The last step reassign value to input box so it is empty after the item is appended.
*/


//!CLICK TO REMOVE AND CHECK LI
// add event listener to the whole list container, 
// use an if statment to find of it the list has been clicked on or the span X to perform an action 

listContainer.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){    // always use upper case when looking at tagName
        event.target.classList.toggle("checked");  // toggles the state of class on and off 
        saveData (); // function called  to save changes
    } 
    else if (event.target.tagName === "SPAN"){ // Upper case
        event.target.parentElement.remove();   // removes parent element of the span 
        saveData (); // function called to save changes
        }    
}, false) // if false does nothing 


//!ADD TO LOCAL STORAGE
//create a function to tore the data in.

function saveData () {
localStorage.setItem("info", listContainer.innerHTML)  
    }
/*
Set item means save data to local storage 
"__" is the name/ label given to the data saved
data is stores as a key value pair - with the label 
Then the directory of what is been saved .
*/


//! GET DATA FROM LOCAL STORAGE 
function getData (){
    listContainer.innerHTML=localStorage.getItem("info")
}

getData ();  // call the function to display data 
