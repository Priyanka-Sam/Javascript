"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close-modal");
const open = document.querySelectorAll(".show-modal");

const hidemodal = function ()
{    modal.classList.add('hidden')
  overlay.classList.add('hidden') 
}

const openmodal = function ()
    {
        console.log("Button Clicked")
        modal.classList.remove('hidden')   //don't use dot before classname, dot for selection
        overlay.classList.remove('hidden')
    }
    
for (let i = 0; i < open.length; i++) {
    open[i].addEventListener('click',openmodal )
    close.addEventListener('click', hidemodal)   //doing hide() will immediately call the function, execute only when click event happens
    overlay.addEventListener('click',hidemodal)
// console.log(open[i].textContent)

}

//esc key
document.addEventListener('keydown', function (e)    //as event occcurs, js will call this function and pass event object as a param, we do not call thi function oursleves
{
    // console.log("A key was pressed!")
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
    {hidemodal()  
        }
})
