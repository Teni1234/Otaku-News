document.addEventListener('DOMContentLoaded', ()=> {

  const searchToggle = document.getElementById('search-toggle');
  const searchInput = document.getElementById('search-input');
  
  // === ARREGLO 1: Comprobar el input Y el botón ===
  if (searchToggle && searchInput) { 
      
      searchToggle.addEventListener('click', ()=>{
          
          
          searchInput.classList.toggle('is-open'); 
      });
      
  }
  
});