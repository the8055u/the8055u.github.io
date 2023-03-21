// Wait for page to load
window.onload = function() {
  
   // Hide splash after delay
   setTimeout(function() {
      document.querySelector('.splash').classList.add('fade-out');
      document.querySelector('.content').style.display = 'block';
   },1500);
}