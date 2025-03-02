document.addEventListener('DOMContentLoaded', function () {
    let nav = document.getElementById('navbar');
    
    if (nav) { 

  
      function updateProgressBar() {
        const scrollPosition = document.documentElement.scrollTop;
  
        if (scrollPosition <= 0) {
          nav.style.backgroundColor = '#141414';
          nav.style.width = '98%';
        } else {
          nav.style.backgroundColor = '#1e1e1e97';
          nav.style.width = '93%';
        }
      }
  
      window.addEventListener('scroll', updateProgressBar);
      updateProgressBar();
    } else {
      console.error('Navigation bar element not found');
    }
  });
  