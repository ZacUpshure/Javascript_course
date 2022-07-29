'use strict';

// assign all classes to constant variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// function to open the module
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// function to close the module
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);    // call openModal function,
                                                            // click-event

btnCloseModal.addEventListener('click', closeModal);        // call closeModal function,
overlay.addEventListener('click', closeModal);              // click-event either on button or 
                                                            // overlay.

document.addEventListener('keydown', function (e) {         // also close on any key,
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {      //  escape key.
    closeModal();
  }
});
