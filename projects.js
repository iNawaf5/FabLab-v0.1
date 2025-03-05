let liElements = document.querySelectorAll('.small-nav-li a');

liElements.forEach(function(a) {
    a.addEventListener('click', function(event) {
        event.preventDefault();

        document.querySelectorAll('.small-nav-li').forEach(item => item.classList.remove('active'));

        this.parentElement.classList.add('active');
    });
});
