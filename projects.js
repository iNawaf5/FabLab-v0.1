const liElements = document.querySelectorAll('.small-nav-li a');
const cards = document.querySelectorAll('.card');

liElements.forEach(function(a) {
    a.addEventListener('click', function(event) {
        event.preventDefault();

        document.querySelectorAll('.small-nav-li').forEach(item => item.classList.remove('active'));
        this.parentElement.classList.add('active');

        const selectedCategory = this.dataset.category;

        cards.forEach(card => {
            const cardCategory = card.dataset.category;
            if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                card.style.display = 'flex';
                card.style.transform = 'none';
            } else {
                card.style.display = 'none';
            }
        });
    });
});