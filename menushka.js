(() => {
const refs = { 
    
    openModalBtn: document.querySelector("[burger-open]"),
    closeModalBtn: document.querySelector("[burger-close-menu]"),
    modal: document.querySelector("[burger-close]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
  
 
function toggleModal() {
  refs.modal.classList.toggle("menu-mobile-container");
}
})();  