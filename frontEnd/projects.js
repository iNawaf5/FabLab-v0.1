let liElements = document.querySelectorAll('.small-nav-li a');

liElements.forEach(function(a) {
    a.addEventListener('click', function(event) {
        event.preventDefault();

        document.querySelectorAll('.small-nav-li').forEach(item => item.classList.remove('active'));

        this.parentElement.classList.add('active');
    });
});

// category Selector
const cards = document.querySelectorAll(".card");

liElements.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const selectedCategory = event.target.closest("a").dataset.category;

        cards.forEach(card => {
            const cardCategory = card.dataset.category;
            if (selectedCategory === "all" || cardCategory === selectedCategory) {
                card.style.display = "block";
                card.style.transform = "none"; 
            } else {
                card.style.display = "none";
            }
        });
    });
});
