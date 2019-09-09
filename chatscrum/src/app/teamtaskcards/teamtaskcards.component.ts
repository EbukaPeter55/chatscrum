import { Component, OnInit } from '@angular/core';
declare var jQuery: any;


@Component({
  selector: 'app-teamtaskcards',
  templateUrl: './teamtaskcards.component.html',
  styleUrls: ['./teamtaskcards.component.css']
})
export class TeamtaskcardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Jquery here
//     // Get the modal
var modal = document.getElementById("myModal");

// Get the image that opens the modal
var imgg = document.getElementById("myimg");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the image, open the modal 
imgg.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
 function trigger(){
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  
  if (event.target == modal) {
    modal.style.display = "none";
    console.log(event.target)
  }
}

//script for edit task modal
// Get the modal
// var edit = document.getElementById("myEdit");

// // Get the image that opens the modal
// var mag = document.getElementById("myimg-2");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("clos")[0];

// // When the user clicks the image, open the modal 
// mag.onclick = function() {
//   edit.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
//  function pop(){
//   edit.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
  
//   if (event.target == edit) {
//     console.log(event.target);
//     edit.style.display = "none";
    
//   }
// }
  }


  

}
