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
    window.addEventListener("load", toggleModal)
      function toggleModal() {
        let modalTrigger = document.querySelectorAll(".modal_wrapper");
        let overlay = document.querySelector(".overlay");

        // modalTrigger.forEach(trigger => {
          for (let i = 0; i < modalTrigger.length; i++) {
            const trigger = modalTrigger[i];
            // Get the modal element under the index
            let modal = trigger.querySelector(".modal");
            let close = modal.querySelector(".cancel");
            // Functions to call to hide or show
              let showModal = ()=>{
                modal.classList.remove("hidden");
                overlay.classList.remove("hidden");
              };
              let hideModal = ()=>{
                modal.classList.add("hidden");
                overlay.classList.add("hidden");
              };
            // Call the function
            trigger.addEventListener('click', ()=>{
              showModal();
            });
            close.addEventListener("click", ()=>{
              hideModal();
            });

          // Close the modal if user clicks anywhere outside the modal
          window.onclick = (event)=>{
            if (event.target === overlay) {
              hideModal()
            }
          }
        };


        
        
      }
      
    
  }
}
