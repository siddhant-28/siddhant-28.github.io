var options = {
  strings: ['Software Engineer', 'Web Developer', 'Software Engineer | Web Developer'],
  typeSpeed: 40,
  backSpeed: 40
};
  
var typed = new Typed('.element', options);


topButton = document.getElementById("topbtn")

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  }
  else {
    topButton.style.display = "none";
  }
}

topButton.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}