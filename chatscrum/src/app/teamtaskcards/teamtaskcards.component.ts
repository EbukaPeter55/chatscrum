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


// Initialise Modal  function
   
window.addEventListener("load", modalControl)
function modalControl(){
  let modalToggle = document.querySelectorAll(".modal_toggle");
  let modal = document.querySelectorAll(".modal");
  let overlay = document.querySelector(".overlay");

  modal.forEach( modal => {
    let toggler = modal.parentElement;

    // Add the click event to modal open icon to open when clicked
    toggler.addEventListener("click", ()=>{
      modalSwitch.show();
    });
      

    // modal modes to control the opening and closing
    var modalSwitch = {
      show : ()=>{
        overlay.classList.remove("hidden");
        modal.classList.remove("hidden");
      },
      hide : ()=>{
        overlay.classList.add("hidden");
        modal.classList.add("hidden");
      }
    };

    // Get the icon to close the modal 
    let close = modal.querySelector("#cancel");

    // Hide modal when user clicks outside the modal or on the close icon
    window.addEventListener('click', function(event){
      if (event.target === overlay || event.target === close ) {
        modalSwitch.hide();
      }
    });
  });
};




  }


  

}
