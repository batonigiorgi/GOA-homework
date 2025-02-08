function moveCircle() {
    const circle = document.getElementById('circle');
    circle.style.bottom = '900px';
    setTimeout(function() {
      circle.style.bottom = '0px';
    }, 800); 
  }
  