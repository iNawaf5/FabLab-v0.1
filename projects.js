let liElements = document.querySelectorAll('.small-nav-li');

liElements.forEach(function(li) {
    li.addEventListener('click', function() {
        this.classList.toggle('active'); 
    });
});