let mybutton;

/* Set the width of the side navigation to 250px */
window.openNav = function() {
    document.getElementById("mySidenav").style.width = "250px";
  };
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// button to get back to top 
window.onload=function(){
// Get button:
mybutton= document.getElementById("myBtn");
console.log(mybutton);
};
// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 20  || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {}

window.topFunction= function(){
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};


// animation of tile
  const container = document.querySelector('.animation-sandbox');
  const animation = container.querySelector('sl-animation');
  const animationName = container.querySelector('.controls sl-select:nth-child(1)');
  const easingName = container.querySelector('.controls sl-select:nth-child(2)');
  const playbackRate = container.querySelector('sl-input[type="number"]');
  const animations = getAnimationNames();
  const easings = getEasingNames();

  animations.map(name => {
    const menuItem = Object.assign(document.createElement('sl-menu-item'), {
      textContent: name,
      value: name
    });
    animationName.appendChild(menuItem);
  });

  easings.map(name => {
    const menuItem = Object.assign(document.createElement('sl-menu-item'), {
      textContent: name,
      value: name
    });
    easingName.appendChild(menuItem);
  });

  animationName.addEventListener('sl-change', () => (animation.name = animationName.value));

