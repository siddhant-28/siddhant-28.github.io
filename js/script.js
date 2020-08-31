var bar = new ProgressBar.Line(progress, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#ff5c33',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
  });
  
  bar.animate(0.9);  // Number from 0.0 to 1.0

  var bar = new ProgressBar.Line(progresstwo, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#ff5c33',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
  });
  
  bar.animate(0.9);  // Number from 0.0 to 1.0

  var bar = new ProgressBar.Line(progressthree, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#ff5c33',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
  });
  
  bar.animate(0.8);  // Number from 0.0 to 1.0

  var bar = new ProgressBar.Line(progressfour, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#ff5c33',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
  });
  
  bar.animate(0.9);  // Number from 0.0 to 1.0

  var bar = new ProgressBar.Line(progressfive, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#ff5c33',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
  });
  
  bar.animate(0.8);  // Number from 0.0 to 1.0

//   var typed = new Typed('#typed', {
//     stringsElement: '#typed-strings'
//   });

  var options = {
    strings: ['Software Engineer', 'Web Developer', 'Software Engineer | Web Developer'],
    typeSpeed: 40,
    fadeOut: false,
    showCursor: false
    // backSpeed: 0,
    // onStop: (arrayPos, self) => {document.getElementByClassName('element').innerHTML = ""}
  };
  
  var typed = new Typed('.element', options);

