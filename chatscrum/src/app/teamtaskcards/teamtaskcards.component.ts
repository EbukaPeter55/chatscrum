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
    
    // Initialise Modal  function
   // Toggle modal

    window.addEventListener("load", modalControl)
    function modalControl(){
      console.log("loaded");
      let modalToggle = document.querySelectorAll(".modal_toggle");
      let modal = document.querySelector(".modal");
      let overlay = document.querySelector(".overlay");
      var close = modal.querySelector("#cancel");
      modalToggle.forEach((toggle)=>{
        toggle.addEventListener("click", lunchModal);
        function lunchModal(){
          modalSwitch.show()
        };
        // hide modal when user clicks the close icon
        close.addEventListener("click", function(){
          modalSwitch.hide();
          console.log("clicked")
        });
      });
      // modal modes
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

      // Hide modal when user clicks outside the modal

      window.addEventListener('click', function(event){
        if (event.target === overlay) {
          modalSwitch.hide();
        }
      })
    };



      
    
  }
}
