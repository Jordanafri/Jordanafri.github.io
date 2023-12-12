let navigation = document.querySelector('.navigation');
document.querySelector('.menuToggle').onclick = function(){
  this.classList.toggle('active');
  navigation.classList.toggle('active')  
}



window.addEventListener('load', function() {
  var element = document.querySelector('.gloss');
  element.classList.add('.gloss_animate'); // Add a class to trigger the animation
});